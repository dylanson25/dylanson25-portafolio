export type SocialMediaKeys =
	| 'GitHub'
	| 'GitLab'
	| 'WebUrl'
	| 'Instagram'
	| 'Facebook'
	| 'Mail'
	| 'Discord';

export interface SocialMedia {
	key: SocialMediaKeys;
	url: string;
}

export interface WorkExperience {
	company: string;
	role: string;
	startDate: string;
	endDate?: string;
	description: string[];
	technologies: Technologie[];
}

export interface Education {
	institution: string;
	degree: string;
	fieldOfStudy: string;
	startDate: string;
	endDate: string;
}

export interface Project {
	name: string;
	description: string;
	links: SocialMedia[];
	technologies: Technologie[];
}

export type TechnologieKeys =
	| 'Angular'
	| 'Astro'
	| 'CPlus'
	| 'CSharp'
	| 'Css'
	| 'Docker'
	| 'FreamWorkscss'
	| 'Git'
	| 'Html'
	| 'JavaScript'
	| 'Node'
	| 'Pinia'
	| 'React'
	| 'Redux'
	| 'Tailwind'
	| 'Vue'
	| 'WinForms'
	| 'GitHub'
	| 'GitLab'
	| 'Netlify';

export interface Technologie {
	key: TechnologieKeys;
	name: string;
}

export type Technologies = Record<TechnologieKeys, Technologie>;
