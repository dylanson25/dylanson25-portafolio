export interface Experience {
	role: string;
	company: string;
	location: string;
	period: string;
	highlights: string[];
	stack: string[];
}

export interface Project {
	name: string;
	description: string;
	stack: string[];
	repo?: string;
	url?: string;
}

export interface SkillGroup {
	title: string;
	items: string[];
}

export const profile = {
	name: 'Dylan Villarreal Toscano',
	role: 'Full-Stack Software Engineer',
	tagline:
		'React / Vue / TypeScript on the front, C# / .NET and SQL on the back.',
	summary: [
		'I am a software engineer with 4+ years of professional experience building production applications, from React, Vue and Next.js frontends to C#/.NET services and desktop applications.',
		'I enjoy turning business requirements into clear technical designs, modernizing legacy systems without breaking what already works, and building small tools that make integration work easier.',
	],
	languages: 'Native Spanish · Fluent English',
	education: {
		degree: "Bachelor's Degree in Software Engineering",
		school: 'Universidad de Colima',
		location: 'Colima, México',
		period: '2018 – 2023',
	},
};

export const experience: Experience[] = [
	{
		role: 'Software Engineer',
		company: 'Irwin Research & Development',
		location: 'Washington, USA',
		period: 'Jun 2024 – Present',
		highlights: [
			'Migrate Windows Forms applications from .NET Framework to .NET 10, modernizing legacy systems while preserving business logic and production stability.',
			'Build a production inventory management system that connects PDA hardware workflows with desktop applications.',
			'Turn business requirements into technical designs and write SQL queries for reporting.',
			'Run system tests, document findings and propose fixes to improve stability and usability.',
		],
		stack: ['C#', '.NET 8', '.NET 10', 'Windows Forms', 'SQL', 'MFC C++'],
	},
	{
		role: 'Frontend Developer',
		company: 'HMH Sistemas',
		location: 'Colima, México · Hybrid',
		period: 'Jul 2022 – Jan 2024',
		highlights: [
			'Developed and maintained production web applications and UI components with React, Vue and Next.js.',
			'Turned Figma designs and business requirements into working, reusable components.',
			'Integrated RESTful APIs with OAuth-based authentication and kept data consistent across systems.',
			'Worked in Agile teams with Git-based workflows and CI/CD for production releases.',
		],
		stack: ['React', 'Vue', 'Next.js', 'TypeScript', 'REST', 'OAuth'],
	},
	{
		role: 'Software Developer (Scholarship Program)',
		company: 'BrightCoders Academy',
		location: 'Colima, México',
		period: 'Nov 2021 – Mar 2022',
		highlights: [
			'Built mobile applications with React Native and Firebase, including API and data integration.',
			'Collaborated on team projects using Agile practices.',
		],
		stack: ['React Native', 'Firebase', 'JavaScript'],
	},
];

export const projects: Project[] = [
	{
		name: 'OPC UA Lab Server',
		description:
			'A lightweight OPC UA server that simulates industrial PLC devices, used to test integrations with OPC UA clients such as FactoryTalk Optix before connecting to real Siemens S7-1500 PLCs.',
		stack: ['Node.js', 'TypeScript', 'node-opcua'],
		repo: 'https://github.com/dylanson25/OPC-UA-SERVER',
	},
	{
		name: 'This Portfolio',
		description:
			'The site you are looking at, server-rendered on Netlify, with a "Who\'s That Pokémon?" mini-game built as a Vue island using the PokéAPI.',
		stack: ['Astro', 'Vue', 'Tailwind CSS', 'Netlify'],
		repo: 'https://github.com/dylanson25/dylanson25-portafolio',
		url: 'https://dylanson25.dev',
	},
	{
		name: 'BEDU Full Stack Final Project',
		description:
			'Frontend for the final project of the BEDU-Santander 2023 Full Stack JavaScript Developer bootcamp.',
		stack: ['React', 'Redux Toolkit', 'Material UI', 'Vite'],
		repo: 'https://github.com/dylanson25/bedu-pf-fsd-frontend-2023',
	},
	{
		name: 'Secure Software MVP',
		description:
			'A mobile MVP built for a secure software development course, using Firebase for authentication and data.',
		stack: ['React Native', 'Firebase'],
		repo: 'https://github.com/dylanson25/ProyectoSP1',
	},
];

export const skills: SkillGroup[] = [
	{
		title: 'Frontend',
		items: [
			'TypeScript',
			'JavaScript',
			'React',
			'Vue',
			'Next.js',
			'Astro',
			'HTML',
			'CSS',
			'Tailwind CSS',
		],
	},
	{
		title: 'Backend & Desktop',
		items: [
			'C#',
			'.NET Framework',
			'.NET 8 / 10',
			'Windows Forms',
			'Node.js',
			'SQL',
			'MFC C++',
		],
	},
	{
		title: 'APIs & Integration',
		items: ['REST', 'OAuth', 'GraphQL', 'OPC UA'],
	},
	{
		title: 'Tooling & Practices',
		items: [
			'Git',
			'CI/CD',
			'Docker',
			'Vite',
			'Webpack',
			'Agile / Scrum',
			'Figma to code',
			'WCAG 2.1',
		],
	},
];

export interface Certification {
	name: string;
	issuer: string;
	date: string;
	url: string;
}

export interface Article {
	title: string;
	date: string;
	url: string;
	language: 'EN' | 'ES';
}

export const certifications: Certification[] = [
	{
		name: 'Fullstack Developer JavaScript',
		issuer: 'BEDU · Santander',
		date: 'Dec 2023',
		url: 'https://www.acreditta.com/credential/6cf77c88-d089-4698-a3ce-516c8399320e',
	},
	{
		name: 'Prototype Day · Fullstack Developer JavaScript',
		issuer: 'BEDU · Santander',
		date: '2023',
		url: 'https://www.acreditta.com/credential/bce2c248-9d68-4c46-8593-93cb6c385ed8',
	},
	{
		name: 'BrightCoders React Native Graduate',
		issuer: 'BrightCoders Academy',
		date: 'Mar 2022',
		url: 'https://api.badgr.io/public/assertions/mZm4Mpd2RWu1NH6ymPHNww',
	},
];

export const articles: Article[] = [
	{
		title: '100 Days CSS Challenge: Day #2',
		date: 'Mar 2024',
		url: 'https://dev.to/dylanson25/100-days-css-challenge-day-2-3gja',
		language: 'EN',
	},
	{
		title: '100 Days CSS Challenge: Day #1',
		date: 'Mar 2024',
		url: 'https://dev.to/dylanson25/100-days-css-challenge-day-1-2lgn',
		language: 'EN',
	},
	{
		title: 'Mi primer trabajo como Desarrollador Front-end Jr.',
		date: 'Mar 2024',
		url: 'https://dev.to/dylanson25/mi-primer-trabajo-como-desarrollador-front-end-jr-3ag7',
		language: 'ES',
	},
];
