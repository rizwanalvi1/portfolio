import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeTheme();
  }

  initializeTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      // Server-side rendering - use light mode as default
      this.setDarkMode(false, false);
      return;
    }

    // Browser-side - check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    this.setDarkMode(isDark, false);
  }

  setDarkMode(isDark: boolean, save: boolean = true): void {
    this.darkModeSubject.next(isDark);

    if (isPlatformBrowser(this.platformId)) {
      if (isDark) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }

      if (save) {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    }
  }

  toggleTheme(): void {
    const currentValue = this.darkModeSubject.value;
    this.setDarkMode(!currentValue);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }
}
