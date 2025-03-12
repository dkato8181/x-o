<script setup lang="ts">
import { store } from '../store'
</script>

<template>
  <div class="grid grid-cols-2 gap-1 mb-6">
    <div
      class="bg-rose-600 p-12 text-white text-center text-7xl"
      :class="{ 'font-bold': store.turn == 'X', 'bg-rose-700': store.turn == 'X' }"
    >
      X
    </div>
    <div
      class="bg-rose-600 p-12 text-white text-center text-7xl"
      :class="{ 'font-bold': store.turn == 'O', 'bg-rose-700': store.turn == 'O' }"
    >
      O
    </div>
  </div>
</template>
