export interface Project {

    id: number;

    title: string;

    subtitle: string;

    description: string;

    challenge: string[];

    solution: string;

    image: string;

    image_carrusel?: string[];

    technologies: string[];

    github: string;

    demo?: string;

    featured: boolean;

}
