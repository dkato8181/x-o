<script setup lang="ts">
import { store } from '../store'

function reset(event: any) {
  store.turn = 'X'
}
</script>

<template>
  <button
    @click="reset"
    type="button"
    class="bg-rose-400 rounded-full border-2 border-rose-500 p-2 text-white font-bold"
  >
    Reset
  </button>
</template>
