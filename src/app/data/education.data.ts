import { IQualification } from '../interfaces';

export const EDUCATION_DATA: IQualification[] = [
    {
        id: 1,
        qualificationName: "MSc Computer Science",
        date: "09/2016 - 09/2017",
        location: "UCL, London",
        description: `Modules taken: Java Programming, Architecture and Hardware, Systems Infrastructure,
  Algorithmics, Database Systems, Software Engineering, Artificial Intelligence and Neural Computing.\n
  Graduated with First Class Honors (with Distinction) and awarded the Dean's List for Academic Achievement`
    },
    {
        id: 2,
        qualificationName: "Online Courses",
        date: "09-2016 - 12/2017",
        location: "Home, London",
        description: `Completed multiple IT-related courses (20+) in a variety of platforms (Coursera, Udemy, Lynda, Pluralsight).
    Some courses were completed to help with project work and others simply for enhancing my skills.
    Currently doing a “Full Stack Web and Multiplatform Mobile App Development
    Specialization” offered by the Hong Kong University of Science and Technology on the Coursera platform.`
    },
    {
        id: 3,
        qualificationName: 'BSc Biomedical Sciences',
        date: "09/2013 - 06/2017",
        location: 'UCL, London',
        description: 'Achieved first class honors.'
    },
    {
        id: 4,
        qualificationName: 'European Baccalaureate',
        date: '07/2013',
        location: 'European School of Luxembourg, Luxembourg',
        description: 'Final Grade: 95.44%.'
    }
];
