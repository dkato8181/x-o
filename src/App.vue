<script setup lang="ts">
import Tile from './components/Tile.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-center bg-sky-100 h-screen">
    <div class="grid grid-cols-2 gap-1 mb-6">
      <div class="bg-rose-700 p-12 text-white text-center text-7xl">X</div>
      <div class="bg-rose-700 p-12 text-white text-center text-7xl">O</div>
    </div>
    <div class="grid grid-cols-3 gap-1 mt-6">
      <Tile v-for="n in 9" />
    </div>
  </main>
</template>
