interface IconPathsModel {
	name: 'github' | 'mail' | 'linkedin' | 'instagram';
	fill: string;
	d: string;
}

export interface IconPropsModel {
	name: 'github' | 'mail' | 'linkedin' | 'instagram';
	fill?: string;
	fill_hover?: string;
	classes?: string[];
	size?: 'sm' | 'md' | 'lg';
}

export interface InconsModel {
	github: IconPathsModel;
	mail: IconPathsModel;
	linkedin: IconPathsModel;
	instagram: IconPathsModel;
}
