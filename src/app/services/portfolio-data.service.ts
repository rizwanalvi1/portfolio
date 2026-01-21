import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  PortfolioData,
  Profile,
  SkillCategory,
  Experience,
  Project,
  Education,
  Certification,
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  private portfolioData: PortfolioData;

  constructor() {
    this.portfolioData = this.initializeData();
  }

  getPortfolioData(): Observable<PortfolioData> {
    return of(this.portfolioData);
  }

  getProfile(): Observable<Profile> {
    return of(this.portfolioData.profile);
  }

  getSkillCategories(): Observable<SkillCategory[]> {
    return of(this.portfolioData.skillCategories);
  }

  getExperiences(): Observable<Experience[]> {
    return of(this.portfolioData.experiences);
  }

  getProjects(): Observable<Project[]> {
    return of(this.portfolioData.projects);
  }

  getEducation(): Observable<Education[]> {
    return of(this.portfolioData.education);
  }

  getCertifications(): Observable<Certification[]> {
    return of(this.portfolioData.certifications);
  }

  private initializeData(): PortfolioData {
    return {
      profile: {
        name: 'Rizwan Alvi',
        title:
          'GenAI/LLM Enthusiast | Data Evangelist | Data-driven Product Development | Angular/React Framework | GIS Expert',
        summary: `Over 15 years of progressive experience in Information Technology and Geographic Information Systems (GIS). 5+ years of international consultancy experience with leading organizations, including LMKR, Halliburton, Saudi Aramco, and Zoneomics, contributing to high-impact global projects. Extensive experience in managing and leading teams for large-scale IT and GIS initiatives, ensuring successful project delivery.`,
        location: 'Apt 8, Bldg 325, Marha St, Alhamra, Al Khobar, Saudi Arabia',
        email: 'rizwanalvi1@gmail.com',
        phone: '+966-58-3049218',
      },

      skillCategories: [
        {
          name: 'AI & Machine Learning',
          skills: [
            {
              name: 'Large Language Models (LLMs)',
              category: 'AI & Machine Learning',
              level: 95,
            },
            { name: 'LangChain', category: 'AI & Machine Learning', level: 90 },
            {
              name: 'LlamaIndex',
              category: 'AI & Machine Learning',
              level: 90,
            },
            {
              name: 'Hugging Face',
              category: 'AI & Machine Learning',
              level: 85,
            },
            {
              name: 'ChatGPT Fine-tuning',
              category: 'AI & Machine Learning',
              level: 90,
            },
            {
              name: 'LLaMA2 & Mixtral',
              category: 'AI & Machine Learning',
              level: 85,
            },
            {
              name: 'Machine Learning',
              category: 'AI & Machine Learning',
              level: 90,
            },
            {
              name: 'Deep Learning',
              category: 'AI & Machine Learning',
              level: 85,
            },
            { name: 'H2O.ai', category: 'AI & Machine Learning', level: 80 },
            { name: 'Haystack', category: 'AI & Machine Learning', level: 80 },
          ],
        },
        {
          name: 'Programming Languages',
          skills: [
            { name: 'Python', category: 'Programming Languages', level: 95 },
            { name: '.NET (C#)', category: 'Programming Languages', level: 90 },
            {
              name: 'JavaScript/TypeScript',
              category: 'Programming Languages',
              level: 95,
            },
            {
              name: 'Java/Enterprise Java',
              category: 'Programming Languages',
              level: 85,
            },
            {
              name: 'SQL (Oracle, PostgreSQL, SQL Server)',
              category: 'Programming Languages',
              level: 90,
            },
          ],
        },
        {
          name: 'Web Frameworks',
          skills: [
            { name: 'Angular', category: 'Web Frameworks', level: 95 },
            { name: 'React', category: 'Web Frameworks', level: 90 },
            { name: 'Node.js', category: 'Web Frameworks', level: 90 },
            { name: 'Spring Framework', category: 'Web Frameworks', level: 80 },
            {
              name: 'Flex/ActionScript',
              category: 'Web Frameworks',
              level: 75,
            },
          ],
        },
        {
          name: 'GIS & Geospatial',
          skills: [
            {
              name: 'ESRI ArcGIS Suite',
              category: 'GIS & Geospatial',
              level: 95,
            },
            { name: 'ArcGIS Server', category: 'GIS & Geospatial', level: 95 },
            { name: 'ArcSDE', category: 'GIS & Geospatial', level: 90 },
            { name: 'QGIS', category: 'GIS & Geospatial', level: 85 },
            { name: 'GeoServer', category: 'GIS & Geospatial', level: 85 },
            { name: 'PostGIS', category: 'GIS & Geospatial', level: 90 },
            { name: 'Oracle Spatial', category: 'GIS & Geospatial', level: 90 },
            { name: 'OpenStreetMap', category: 'GIS & Geospatial', level: 80 },
            {
              name: 'Google Maps API',
              category: 'GIS & Geospatial',
              level: 85,
            },
          ],
        },
        {
          name: 'Business Intelligence & Data Visualization',
          skills: [
            { name: 'Tableau', category: 'BI & Visualization', level: 90 },
            { name: 'Power BI', category: 'BI & Visualization', level: 85 },
            { name: 'Spotfire', category: 'BI & Visualization', level: 85 },
            { name: 'ELK Stack', category: 'BI & Visualization', level: 85 },
            { name: 'Kibana', category: 'BI & Visualization', level: 85 },
            {
              name: 'MicroStrategy',
              category: 'BI & Visualization',
              level: 75,
            },
          ],
        },
        {
          name: 'Data Engineering & Big Data',
          skills: [
            { name: 'PostgreSQL', category: 'Data Engineering', level: 95 },
            {
              name: 'Oracle Database',
              category: 'Data Engineering',
              level: 90,
            },
            { name: 'SQL Server', category: 'Data Engineering', level: 85 },
            { name: 'Elasticsearch', category: 'Data Engineering', level: 85 },
            {
              name: 'Big Data Clusters',
              category: 'Data Engineering',
              level: 85,
            },
            { name: 'ETL Pipelines', category: 'Data Engineering', level: 90 },
            {
              name: 'Data Warehousing',
              category: 'Data Engineering',
              level: 85,
            },
          ],
        },
        {
          name: 'Tools & Platforms',
          skills: [
            { name: 'Docker', category: 'Tools & Platforms', level: 80 },
            { name: 'Git', category: 'Tools & Platforms', level: 90 },
            {
              name: 'SAP Integration',
              category: 'Tools & Platforms',
              level: 75,
            },
            {
              name: 'Android Development',
              category: 'Tools & Platforms',
              level: 75,
            },
            { name: 'REST APIs', category: 'Tools & Platforms', level: 95 },
          ],
        },
      ],

      experiences: [
        {
          id: 1,
          title: 'GeoAI Solutions Specialist',
          company: 'Wipro Arabia (Deployed on Aramco Project)',
          location: 'Saudi Arabia',
          startDate: 'May 2023',
          endDate: 'Present',
          current: true,
          responsibilities: [
            'Responsible for the design, development, and deployment of all enterprise-scale IT/GIS solutions and services within PEASD/RESD department in Saudi Aramco',
            'Design and development of geospatial data using industry standards and guidelines',
            'Development of dashboards for different sub-departments using Tableau/Spotfire',
            'Utilized the .NET SDK for ArcGIS Pro to develop and deploy add-ins for land use permits workflows',
            'Leveraged Angular and the ArcGIS API for JavaScript to design and develop a Web GIS application for the LUPTS Project',
            'Designed, developed, and deployed MapGPT, a Generative AI initiative by the RESD group using open source LLMs',
            'Administration of ArcGIS Server and ArcSDE databases',
            'Provided troubleshooting, installation, configuration, and deployment support for GIS applications and spatial data management',
            'Delivered support services to all departments for their GIS, data, and AI requirements',
          ],
          technologies: [
            'Angular',
            'ArcGIS API',
            '.NET',
            'Python',
            'LLMs',
            'Tableau',
            'Spotfire',
          ],
        },
        {
          id: 2,
          title: 'Team Lead – Data Science',
          company: 'Zoneomics Pvt. Ltd.',
          location: 'Pakistan',
          startDate: 'Sep 2021',
          endDate: 'Present',
          current: true,
          responsibilities: [
            'Led the design, implementation, and governance of data-related projects, policies, and frameworks across the organization',
            'Engineered and maintained robust automated data ingestion and processing pipelines',
            'Designed, managed, and maintained a high-performance PostgreSQL-based DBMS cluster',
            'Developed and deployed Python-based automation scripts to streamline data workflows',
            'Delivered high-quality, client-ready datasets in accordance with predefined data standards',
            'Oversaw end-to-end data processing and management with comprehensive validation and quality assurance',
            'Leveraged AI and conventional machine learning techniques to identify data anomalies and inconsistencies',
          ],
          technologies: [
            'Python',
            'PostgreSQL',
            'Machine Learning',
            'ETL',
            'Data Engineering',
          ],
        },
        {
          id: 3,
          title: 'Principal Data Scientist',
          company: 'Inbox Business Technologies PVT. LTD.',
          location: 'Pakistan',
          startDate: 'Oct 2020',
          endDate: 'Jul 2021',
          current: false,
          responsibilities: [
            'Taking care of all data related projects, policies and frameworks within organization',
            "Development of state-of-the art dashboards for PTA and CMO's for WMS Project",
            'Development of state-of-the art 30 node cluster for big data analysis',
            'Development/Deployment of ML/DL pipelines for prediction of application behaviors and personification',
            "Geo-Analytical Framework Design for Subscriber level Dashboard's for CMO's and PTA",
            'Effective Network Optimization in terms of Capacity and Coverage using latest tools and techniques',
            'Automation of workflows using Python based scripts',
            'Capacity building and in-house GIS trainings for PTA Staff',
          ],
          technologies: [
            'Python',
            'Machine Learning',
            'Deep Learning',
            'Big Data',
            'GIS',
            'Dashboard Development',
          ],
        },
        {
          id: 4,
          title: 'Manager Geo Analytics/Marketing',
          company: 'UFONE PTML PVT. LTD.',
          location: 'Pakistan',
          startDate: 'Mar 2020',
          endDate: 'Oct 2021',
          current: false,
          responsibilities: [
            'Robust Network Planning and Optimization for coverage and capacity solutions using latest geo-tools',
            'Optimum selection of potential areas of network expansion for maximum ROI',
            'Development of fully automated pipelines for network performance monitoring using sector level KPIs',
            'Leading the exercise to prepare site-wise profitability analysis for 12000+ network sites',
            'Geo-Spatial analysis on hourly and sector-level datasets for effective decision making',
            'Analytical Dashboard Integration of PTCL and UFONE KPIs',
            'Development of Dashboards for cross teams using opensource softwares (elasticsearch/kibana)',
            'Helping other departments with actionable insights to boost performance',
          ],
          technologies: [
            'GIS',
            'Python',
            'Elasticsearch',
            'Kibana',
            'Data Analytics',
            'Dashboard Development',
          ],
        },
        {
          id: 5,
          title: 'Team Lead, Data Development',
          company: 'TPLMaps PVT. LTD.',
          location: 'Pakistan',
          startDate: 'Jan 2017',
          endDate: 'Mar 2020',
          current: false,
          responsibilities: [
            'Overall technical and non-technical management of surveyors, digitizers, analysts, supervisors',
            "Translation of company's vision into product development around data development workflows",
            'Centralized Database Management activities within/across the teams in multiple cities',
            'Open-source qGIS based plugins development for efficient data digitization and management',
            'Big data analytics for trakker traffic data of around 150,000 vehicles',
            'Using Machine/Deep Learning Algorithms to classify errors in data and finding missing links',
            'Python based scripting to automate different data QA/QC workflows',
            'Design, development and execution of first Pakistani crowd sourced GIS platform',
            'Building robust tools for data development and visualization using elasticsearch, tangram, kibana, qGIS',
          ],
          technologies: [
            'QGIS',
            'Python',
            'Machine Learning',
            'PostgreSQL',
            'Elasticsearch',
            'GIS',
          ],
        },
        {
          id: 6,
          title: 'Sr. Application Designer',
          company: 'Landmark Technologies Pvt. Ltd. (LMKT)',
          location: 'Pakistan',
          startDate: 'Dec 2010',
          endDate: 'Dec 2017',
          current: false,
          responsibilities: [
            'Design, Analysis, Development and Deployment Strategy of GIS based Solutions for Desktop, Web and Mobile Platforms',
            'Mobile Based GIS Applications using different APIs for GIS (Google, Android, ArcGIS)',
            'Geodatabase design using ArcSDE and ArcGIS desktop tools and utilities',
            'Geospatial and tabular analysis on parcel level data sets using Oracle in ArcSDE environments',
            'Design, Management and Troubleshooting of multi-user geodatabase using ArcSDE versioning',
            'GIS Database Migration from ArcSDE 9 to ArcSDE 10',
            'Development of Landmark Central Data Repository',
            'ArcGIS Server and ArcSDE Database Administration',
          ],
          technologies: [
            'ArcGIS',
            'ArcSDE',
            'Oracle Spatial',
            'Java',
            '.NET',
            'Android',
            'Mobile Development',
          ],
        },
      ],

      projects: [
        {
          id: 1,
          name: 'MapGPT - Generative AI for Geospatial Analysis',
          description:
            'Designed, developed, and deployed MapGPT, a cutting-edge Generative AI initiative by the RESD group using open source Large Language Models for intelligent geospatial query and analysis.',
          technologies: [
            'LLMs',
            'LangChain',
            'Python',
            'Angular',
            'ArcGIS',
            'OpenAI',
          ],
          highlights: [
            'First-of-its-kind AI-powered GIS solution in Saudi Aramco',
            'Natural language interface for complex geospatial queries',
            'Integration with enterprise GIS infrastructure',
            'Significant reduction in query processing time',
          ],
          category: 'AI & GIS',
        },
        {
          id: 2,
          name: 'LUPTS - Land Use Permits Tracking System',
          description:
            'Comprehensive Web GIS application for land use permits workflow management using Angular and ArcGIS API for JavaScript, with custom .NET SDK add-ins for ArcGIS Pro.',
          technologies: [
            'Angular',
            'ArcGIS API for JavaScript',
            '.NET SDK',
            'ArcGIS Pro',
            'TypeScript',
          ],
          highlights: [
            'Streamlined land permit workflows for Saudi Aramco',
            'Real-time spatial analysis and visualization',
            'Integration with SAP and enterprise systems',
            'Automated reporting and compliance tracking',
          ],
          category: 'Enterprise GIS',
        },
        {
          id: 3,
          name: 'Enterprise Data Pipeline Architecture',
          description:
            'Designed and implemented robust automated data ingestion and processing pipelines with high-performance PostgreSQL cluster for Zoneomics.',
          technologies: [
            'Python',
            'PostgreSQL',
            'ETL',
            'Docker',
            'Linux',
            'Airflow',
          ],
          highlights: [
            'Processing millions of records daily',
            'AI-powered data quality checks',
            'Scalable multi-node architecture',
            'Reduced data processing time by 70%',
          ],
          category: 'Data Engineering',
        },
        {
          id: 4,
          name: '30-Node Big Data Cluster for Telecom Analytics',
          description:
            'Development of state-of-the-art 30 node cluster for big data analysis, ML/DL pipelines for application behavior prediction and network optimization.',
          technologies: [
            'Python',
            'Hadoop',
            'Spark',
            'Machine Learning',
            'Deep Learning',
            'Elasticsearch',
          ],
          highlights: [
            'Real-time network performance monitoring',
            'Predictive analytics for capacity planning',
            'Subscriber behavior analysis at scale',
            'Regulatory compliance dashboards for PTA',
          ],
          category: 'Big Data & ML',
        },
        {
          id: 5,
          name: 'Saudi Aramco Land Management Solution',
          description:
            'Enterprise GIS solution supporting land management business processes with web applications, desktop tools, and mobile devices integrated with SAP.',
          technologies: [
            'ESRI Flex API',
            'ArcGIS Server',
            'Python',
            'Oracle Spatial',
            'SAP Integration',
          ],
          highlights: [
            'Service-oriented architecture integration',
            'Geoprocessing services automation',
            'Mobile survey applications',
            'SAP-PI web services integration',
          ],
          category: 'Enterprise GIS',
        },
        {
          id: 6,
          name: 'Network Optimization & Profitability Analysis',
          description:
            'Comprehensive site-wise profitability analysis for 12,000+ network sites with automated KPI monitoring pipelines for UFONE telecom network.',
          technologies: [
            'Python',
            'GIS',
            'Elasticsearch',
            'Kibana',
            'SQL',
            'Tableau',
          ],
          highlights: [
            'Analyzed 12,000+ telecom sites',
            'Identified cost reduction opportunities',
            'Real-time KPI dashboards',
            'ROI optimization for network expansion',
          ],
          category: 'Analytics & GIS',
        },
        {
          id: 7,
          name: 'Crowd-Sourced GIS Platform',
          description:
            "Design, development and execution of Pakistan's first crowd sourced GIS platform for data generation and quality assurance of existing geographic data.",
          technologies: [
            'QGIS',
            'PostgreSQL',
            'Python',
            'Angular',
            'OpenStreetMap',
            'PostGIS',
          ],
          highlights: [
            'First Pakistani crowd-sourced GIS platform',
            'Community-driven data validation',
            'Real-time data quality metrics',
            'Mobile data collection integration',
          ],
          category: 'GIS Innovation',
        },
        {
          id: 8,
          name: 'MegaProject - Integrated GIS Portal',
          description:
            'Comprehensive GIS portal for Saudi Aramco with multiple business use cases including imagery services, evacuation routes, medical facilities locator, and disease distribution mapping.',
          technologies: [
            'ArcGIS Server',
            'Flex API',
            'Spring Framework',
            'Java',
            'Oracle',
          ],
          highlights: [
            'Temporal imagery change detection',
            'Emergency response planning tools',
            'Healthcare facility mapping',
            'CAD drawing integration',
          ],
          category: 'Enterprise GIS',
        },
      ],

      education: [
        {
          id: 1,
          degree: 'Masters in GIS and Remote Sensing',
          institution: 'Institute of Space Technology',
          location: 'Islamabad, Pakistan',
          startDate: 'Sep 2016',
          endDate: 'Sep 2018',
          description:
            'Advanced studies in Geographic Information Systems, Remote Sensing, Spatial Analysis, and Geospatial Technologies',
        },
        {
          id: 2,
          degree: 'Bachelor of Computer Engineering',
          institution:
            'Balochistan University of Information Technology, Engineering and Management Sciences',
          location: 'Quetta, Pakistan',
          startDate: 'Aug 2003',
          endDate: 'Sep 2007',
          description:
            'Comprehensive education in Computer Engineering, Software Development, and Information Systems',
        },
      ],

      certifications: [
        {
          id: 1,
          name: 'International Training Seminar on Open Source Software in Health Care',
          issuer: 'Malaysia',
          date: '2010',
          description:
            'Specialized training in open-source technologies for healthcare information systems',
        },
        {
          id: 2,
          name: 'Microsoft .NET Framework Training',
          issuer: 'EVS Learning Solutions',
          date: '2011',
          description:
            'Comprehensive training in .NET Framework development and best practices',
        },
        {
          id: 3,
          name: 'GIS-Developers Perspective',
          issuer: 'SUPARCO, Karachi',
          date: '2009',
          description:
            'Advanced GIS development training from Pakistan Space Agency',
        },
        {
          id: 4,
          name: 'Enterprise JAVA, J2EE Platform',
          issuer: 'BUITMS',
          date: '2008',
          description:
            'Enterprise Java development and J2EE platform architecture',
        },
        {
          id: 5,
          name: 'Health Mapper Software Training',
          issuer: 'UNO/WHO',
          date: '2009',
          description:
            'Specialized training in health mapping and spatial epidemiology tools',
        },
      ],
    };
  }
}
