import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appScrollProgress]',
  standalone: true,
})
export class ScrollProgressDirective implements OnInit, OnDestroy {
  private scrollSubscription?: Subscription;
  private progressBar?: HTMLElement;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createProgressBar();
      this.setupScrollListener();
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  private createProgressBar() {
    const progressContainer = this.renderer.createElement('div');
    this.progressBar = this.renderer.createElement('div');

    this.renderer.addClass(progressContainer, 'scroll-progress');
    this.renderer.addClass(this.progressBar, 'progress-bar');

    this.renderer.appendChild(progressContainer, this.progressBar);
    this.renderer.appendChild(document.body, progressContainer);
  }

  private setupScrollListener() {
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(throttleTime(10))
      .subscribe(() => {
        this.updateProgress();
      });
  }

  private updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (this.progressBar) {
      this.renderer.setStyle(
        this.progressBar,
        'width',
        `${Math.min(scrollPercent, 100)}%`,
      );
    }
  }
}
