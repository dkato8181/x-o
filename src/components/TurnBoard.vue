<script setup lang="ts">
import { store } from '../store'
</script>

<template>
  <div class="grid grid-cols-2 gap-1 mb-6">
    <div
      :class="[
        store.turn == 'X' ? 'font-bold bg-rose-700 scale-108' : 'bg-rose-600',
        'p-12 text-white text-center text-7xl',
      ]"
    >
      X
    </div>
    <div
      :class="[
        store.turn == 'O' ? 'font-bold bg-rose-700 scale-108' : 'bg-rose-600',
        'p-12 text-white text-center text-7xl',
      ]"
    >
      O
    </div>
  </div>
</template>
