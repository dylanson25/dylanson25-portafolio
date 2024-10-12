export enum GameStatus {
	Playing = 'playing',
	Won = 'won',
	Lost = 'lost',
}

export interface PokemonListResponse {
	count: number;
	next: string;
	previous: null;
	results: Result[];
}

export interface Result {
	name: string;
	url: string;
}

export interface Pokemon {
	id: number;
	name: string;
}
