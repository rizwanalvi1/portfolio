import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { SkillCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];
  selectedCategory: string | null = null;

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getSkillCategories().subscribe((data) => {
      this.skillCategories = data;
    });
  }

  selectCategory(categoryName: string): void {
    this.selectedCategory =
      this.selectedCategory === categoryName ? null : categoryName;
  }
}
