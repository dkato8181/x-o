<script setup lang="ts">
import { ref } from 'vue'
import { store } from '../store'

const card = ref('')

function play(event: any) {
  if (card.value != '') {
    return
  }
  card.value = store.turn
  store.switch()
}
</script>

<template>
  <div @click="play" class="bg-sky-700 p-8 text-white text-center text-7xl">{{ card }}</div>
</template>
