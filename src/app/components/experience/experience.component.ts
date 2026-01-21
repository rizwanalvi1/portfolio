import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  selectedExperience: number | null = null;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getExperiences().subscribe((data) => {
      this.experiences = data;
    });
  }

  toggleExperience(id: number): void {
    this.selectedExperience = this.selectedExperience === id ? null : id;
  }
}
