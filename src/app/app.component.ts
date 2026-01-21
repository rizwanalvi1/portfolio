import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { ThemeService } from "./services/theme.service";
import { SocialLinks } from "./models/social-links.model";

// Import all components
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { EducationComponent } from "./components/education/education.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

// Import directives
import { AnimateOnScrollDirective } from "./directives/animate-on-scroll.directive";
import { ScrollProgressDirective } from "./directives/scroll-progress.directive";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
    AnimateOnScrollDirective,
    ScrollProgressDirective,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "Rizwan Alvi - Portfolio";
  socialLinks: SocialLinks | null = null;

  constructor(
    private themeService: ThemeService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    // Initialize theme service
    this.themeService.initializeTheme();
    this.loadSocialLinks();
  }

  private loadSocialLinks(): void {
    this.http.get<SocialLinks>("info.json").subscribe({
      next: (links) => {
        this.socialLinks = links;
      },
      error: (error) => {
        console.error("Failed to load social links", error);
      },
    });
  }
}
