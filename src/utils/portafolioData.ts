import type {
	WorkExperience,
	Education,
	Project,
	Technologies,
	TechnologieKeys,
	Technologie,
	SocialMedia,
} from '@/models/portafolioData.model';

export const objectTechnologie: Technologies = {
	Angular: {
		key: 'Angular',
		name: 'AngularJS',
	},
	Astro: {
		key: 'Astro',
		name: 'AstroJS',
	},
	Git: {
		key: 'Git',
		name: 'Git',
	},
	GitHub: {
		key: 'GitHub',
		name: 'GitHub',
	},
	GitLab: {
		key: 'GitLab',
		name: 'GitLab',
	},
	Html: {
		key: 'Html',
		name: 'Html',
	},
	JavaScript: {
		key: 'JavaScript',
		name: 'JavaScript',
	},
	CSharp: {
		key: 'CSharp',
		name: 'C#',
	},
	CPlus: {
		key: 'CPlus',
		name: 'C++',
	},
	React: {
		key: 'React',
		name: 'ReactJS',
	},
	Redux: {
		key: 'Redux',
		name: 'ReduxJS',
	},
	WinForms: {
		key: 'WinForms',
		name: 'WinForms',
	},
	FreamWorkscss: {
		key: 'FreamWorkscss',
		name: 'FreamWorks Css',
	},
	Node: {
		key: 'Node',
		name: 'Node',
	},
	Netlify: {
		key: 'Netlify',
		name: 'Netlify',
	},
	Pinia: {
		key: 'Pinia',
		name: 'Pinia',
	},
	Css: {
		key: 'Css',
		name: 'Css',
	},
	Docker: {
		key: 'Docker',
		name: 'Docker',
	},
	Vue: {
		key: 'Vue',
		name: 'VueJS',
	},
	Tailwind: {
		key: 'Tailwind',
		name: 'Tailwind Css',
	},
};

export const getSkills = (skills: TechnologieKeys[]): Technologie[] => {
	return Object.keys(objectTechnologie)
		.filter((key): key is TechnologieKeys =>
			skills.includes(key as TechnologieKeys),
		)
		.map((key) => objectTechnologie[key]);
};

export const workExperience: WorkExperience[] = [
	{
		company: 'Irwin Research & Development',
		role: 'Software Engineer',
		startDate: '2023-07',
		description: [
			'Developed software using .NET Framework and C++.',
			'Learned and applied PLC programming with Structure Text and TIA Portal.',
		],
		technologies: [],
	},
];

export const education: Education[] = [
	{
		institution: 'Universidad de Colima',
		degree: "Bachelor's Degree",
		fieldOfStudy: 'Software Engineering',
		startDate: '2018-08',
		endDate: '2023-07',
	},
];

export const projects: Project[] = [
	{
		name: 'Portfolio Website',
		description:
			'Personal portfolio built with Astro.js, Tailwind CSS, and deployed on Netlify.',
		links: [
			{
				key: 'GitHub',
				url: 'https://github.com/dylanson25/dylanson25-portafolio',
			},
			{ key: 'WebUrl', url: 'https://dylanson25.dev/' },
		],
		technologies: getSkills(['Astro', 'JavaScript', 'Css', 'Html', 'Tailwind']),
	},
];

export const socialsMedia: SocialMedia[] = [
	{
		key: 'GitHub',
		url: 'https://github.com/dylanson25',
	},
	{
		key: 'GitLab',
		url: 'https://gitlab.com/dylanson25',
	},
	{
		key: 'Linkedin',
		url: 'https://www.linkedin.com/in/dylan-toscano/',
	},
];
