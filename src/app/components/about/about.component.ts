import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Profile } from '../../models/portfolio.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  profile!: Profile;
  yearsOfExperience = 15;
  projectsCompleted = 50;
  internationalClients = 10;

  highlights = [
    { icon: 'briefcase', title: 'Years Experience', value: '15+' },
    { icon: 'globe', title: 'International Projects', value: '25+' },
    { icon: 'users', title: 'Teams Led', value: '10+' },
    { icon: 'award', title: 'Major Clients', value: 'Aramco, LMKR' },
  ];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }
}
