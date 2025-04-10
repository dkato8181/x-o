<script setup lang="ts">
import BtnReset from './components/BtnReset.vue'
import Tile from './components/Tile.vue'
import TurnBoard from './components/TurnBoard.vue'
import { store } from './store'

function setTile(): void {
  if (store.gameDone) {
    return
  }
  const tileNumber: number = store.getBestNumber(store.turn)
  setTimeout(() => {
    store.play(tileNumber)
  }, 1000)
}
</script>

<template>
  <main class="flex flex-col items-center justify-center bg-sky-100 h-screen">
    <TurnBoard />
    <div class="grid grid-cols-3 gap-1 mt-6">
      <Tile v-for="n in 9" :tileNumber="n" @computer-turn="setTile" />
    </div>
    <div class="my-3">
      <BtnReset />
    </div>
  </main>
</template>
