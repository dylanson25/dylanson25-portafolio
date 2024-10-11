<template>
	<section class="mt-5 grid grid-cols-2 grid-rows-2 gap-2 mb-2">
		<button
			v-for="{ name, id } in options"
			:key="id"
			@click="$emit('selectedOption', id)"
			:class="[
				'tracking-wider shadow-md border-slate-200 border-2 border-solid rounded-lg p-2 cursor-pointer  text-center transition-all hover:bg-gray-100 hover:text-slate-700 font-medium capitalize disabled:shadow-none disabled:bg-gray-100',
				{
					correct: id === correctAnswer && blockSelection,
					incorrect: id !== correctAnswer && blockSelection,
				},
			]"
			:disabled="blockSelection"
		>
			{{ name }}
		</button>
	</section>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/models/pokemonGame.model';

interface Props {
	options: Pokemon[];
	blockSelection: boolean;
	correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
	selectedOption: [id: number];
}>();
</script>

<style scoped>
.correct {
	background-color: #22c55e;
	color: rgba(255, 255, 255, 0.884);
}

.incorrect {
	background-color: rgb(251 113 133 / 0.7);
	color: #2b2b2b9d;
}
.correct,
.incorrect {
	border-color: transparent;
	cursor: default;
}
</style>
