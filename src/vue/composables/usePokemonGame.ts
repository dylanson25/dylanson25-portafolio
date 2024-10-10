import { computed, onMounted, ref } from 'vue';
import {
	GameStatus,
	type Pokemon,
	type Result,
} from '@/models/pokemonGame.model';
import pokemonApi from '@/apis/PokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
	const gameStatus = ref<GameStatus>(GameStatus.Playing);
	const pokemons = ref<Pokemon[]>([]);
	const pokemonOptions = ref<Pokemon[]>([]);

	const randomPokemon = computed(() => {
		const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
		return pokemonOptions.value[randomIndex];
	});
	const isLoading = computed(() => pokemons.value.length === 0);

	const getPokemons = async (): Promise<Pokemon[]> => {
		const { data } = await pokemonApi.get('/?limit=151');
		const results: Result[] =
			typeof data.results == 'object' ? data.results : [];

		const pokemonsArray = results.map(({ url, name }) => {
			const urlParts = url.split('/');
			const id = urlParts.at(-2) ?? 0;
			return {
				name: name,
				id: +id,
			};
		});

		return pokemonsArray.sort(() => Math.random() - 0.5);
	};

	const getNextRound = (howMany: number = 4) => {
		gameStatus.value = GameStatus.Playing;
		pokemonOptions.value = pokemons.value.slice(0, howMany);
		pokemons.value = pokemons.value.slice(howMany);
	};

	const checkAnswer = (id: number) => {
		const hasWon = randomPokemon.value.id === id;

		if (hasWon) {
			gameStatus.value = GameStatus.Won;
			confetti({
				particleCount: 300,
				spread: 150,
				origin: { y: 0.6 },
			});
			return;
		}

		gameStatus.value = GameStatus.Lost;
	};

	onMounted(async () => {
		pokemons.value = await getPokemons();
		getNextRound();
	});

	return {
		gameStatus,
		isLoading,
		pokemonOptions,
		randomPokemon,

		// Methods
		getNextRound,
		checkAnswer,
	};
};
