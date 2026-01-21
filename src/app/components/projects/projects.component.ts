import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedCategory: string = 'all';
  categories: string[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((data) => {
      this.projects = data;
      this.extractCategories();
    });
  }

  extractCategories(): void {
    const categorySet = new Set(
      this.projects
        .map((p) => p.category)
        .filter((c): c is string => c !== undefined),
    );
    this.categories = ['all', ...Array.from(categorySet)];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === this.selectedCategory);
  }
}
