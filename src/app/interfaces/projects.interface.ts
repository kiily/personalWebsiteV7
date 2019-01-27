export interface IProject {
    id: number;
    title: string;
    description: string;
    githubLink: string;
    technologies: string[];
    website?: string;
}