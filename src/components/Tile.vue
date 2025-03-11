<script setup lang="ts">
import { ref } from 'vue'
const card = ref('')
const turn = ref('X')
function play(event: any) {
  card.value = turn.value
  if (turn.value == 'X') {
    turn.value = 'O'
  } else if (turn.value == 'O') {
    turn.value = 'X'
  }
}
</script>

<template>
  <div @click="play" class="bg-sky-700 p-8 text-white text-center text-7xl">{{ card }}</div>
</template>
