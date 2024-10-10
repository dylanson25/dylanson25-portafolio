<template>
	<section class="mt-5 flex flex-col">
		<button
			v-for="{ name, id } in options"
			:key="id"
			@click="$emit('selectedOption', id)"
			:class="[
				'bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100 capitalize disabled:shadow-none disabled:bg-gray-100',
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
	background-color: rgb(59 130 246 / var(1)) /* #3b82f6 */;
	color: rgb(255 255 255 / var(1)) /* #ffffff */;
}

.incorrect {
	background-color: rgb(254 226 226 / var(0.7)) /* #fee2e2 */;
}
</style>
