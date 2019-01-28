import { IProject } from '../interfaces';

export const PROJECTS_DATA: IProject[] = [
    {
        id: 5,
        title: 'Personal Website',
        description: `Personal website built with Angular 7 to showcase my code and act as a CV for employers.`,
        githubLink: 'https://github.com/kiily/personalWebsiteV7',
        technologies: ['Angular 7', 'HTML', 'SCSS', 'Typescript'],
    },
    {
        id: 4,
        title: 'SDI Visual Tools',
        description: `Web application for internal use at UCL presenting a future envisioning use case with the HoloLens and PowerBI.
        It aims to help in the implementation of the Scaffolding-Discovery-Innovation (SDI) methodology developed
        by Dr. Mohamedally at UCL.`,
        githubLink: 'https://github.com/kiily/SDIVisualTools',
        technologies: ['Angular 5', 'HTML', 'SCSS', 'Typescript', 'Firebase', 'PowerBI', 'HoloLens'],
        website: 'https://kiily.github.io/SDIVisualTools/'
    },
    {
        id: 2,
        title: 'Blood Test Tracker',
        description: `Hybrid Mobile App developed for people who are
        anxious about blood tests and what they mean for their health. With features
        including a reminder to collect results, informative pages and reassuring
        videos from a GP and the ability to keep track of previous tests you may have
        had.`,
        githubLink: 'https://github.com/kiily/GC02_APP_Team6',
        technologies: ['Ionic', 'Cordova', 'HTML', 'SCSS', 'TypeScript', 'Firebase']
    },
    {
        id: 1,
        title: 'Restaurant Management Billing System',
        description: `A basic restaturant management system developed as
        part of the COMPGC01 course at UCL - yes, they made us use JavaFX...`,
        githubLink: 'https://github.com/kiily/COMPGC01-Coursework',
        technologies: ['Java', 'JavaFX', 'MySQLite']
    },
    {
        id: 3,
        title: 'SoShallNetwork',
        description: `Azure-hosted social network developed as part of the COMPGC06 coursework
        at UCL.`,
        githubLink: 'https://github.com/kiily/database_social_network_perso',
        technologies: ['HTML', 'CSS', 'PHP', 'MySQL']
    },
];
