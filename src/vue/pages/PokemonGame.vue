<template>
	<template v-if="isReadyToPlay">
		<section
			v-if="isLoading || randomPokemon?.id === null"
			class="flex flex-col justify-center items-center w-full min-h-80 text-white"
		>
			<h1 class="text-3xl">Please wait</h1>
			<h3 class="animate-pulse">Loading Pokémons</h3>
		</section>

		<section
			v-else
			class="flex flex-col justify-center items-center text-white"
		>
			<h1 class="text-xl">Who's that Pokémon?</h1>

			<!-- Pokemon Options -->
			<PokemonOptions
				:options="options"
				:block-selection="gameStatus !== GameStatus.Playing"
				:correct-answer="randomPokemon.id"
				@selected-option="checkAnswer"
			/>
			<div class="h-20">
				<button
					v-if="gameStatus !== GameStatus.Playing"
					@click="getNextRound(4)"
					class="pt-2 rounded-md hover:underline hover:text-white text-white/70 decoration-solid"
					data-test-id="btn-new-game"
				>
					Play Again
				</button>
			</div>
			<!-- Pokemon Picture -->
			<PokemonPicture
				:pokemon-id="randomPokemon.id"
				:show-pokemon="gameStatus !== GameStatus.Playing"
			/>
		</section>
	</template>
	<template v-else>
		<section class="text-white max-w-sm text-center">
			<h2 class="text-3xl mb-2">Who's That Pokémon?</h2>
			<p class="mb-1">
				A small mini-game built with Vue and the PokéAPI. Guess the Pokémon
				from its silhouette and test your knowledge!
			</p>
			<button
				@click="SetReadyToPlay()"
				class="mt-4 rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-900 transition hover:bg-cyan-400 cursor-pointer"
				data-test-id="btn-new-game"
			>
				Ready to play?
			</button>
		</section>
	</template>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '@/models/pokemonGame.model';
import { onMounted } from 'vue';

const {
	randomPokemon,
	isLoading,
	gameStatus,
	pokemonOptions: options,
	checkAnswer,
	getNextRound,
	init,
} = usePokemonGame();

import { ref } from 'vue';

const isReadyToPlay = ref(false);
const SetReadyToPlay = () => (isReadyToPlay.value = !isReadyToPlay.value);

onMounted(init);
</script>
