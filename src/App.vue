<script setup lang="ts">
import Tile from './components/Tile.vue'
import TurnBoard from './components/TurnBoard.vue'
</script>

<template>
  <main class="flex flex-col items-center justify-center bg-sky-100 h-screen">
    <TurnBoard />
    <div class="grid grid-cols-3 gap-1 mt-6">
      <Tile v-for="n in 9" />
    </div>
  </main>
</template>
