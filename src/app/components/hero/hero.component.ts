import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PortfolioDataService } from "../../services/portfolio-data.service";
import { Profile } from "../../models/portfolio.model";
import { SocialLinks } from "../../models/social-links.model";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent implements OnInit {
  profile: Profile | null = null;
  @Input() socialLinks: SocialLinks | null = null;

  protected readonly socialPlatforms: Array<{
    key: keyof SocialLinks;
    label: string;
    icon: string;
  }> = [
    { key: "linkedin", label: "LinkedIn", icon: "assets/icons/linkedin.svg" },
    { key: "facebook", label: "Facebook", icon: "assets/icons/facebook.svg" },
    { key: "twitter", label: "Twitter", icon: "assets/icons/twitter.svg" },
    {
      key: "instagram",
      label: "Instagram",
      icon: "assets/icons/instagram.svg",
    },
    { key: "github", label: "GitHub", icon: "assets/icons/github.svg" },
  ];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
