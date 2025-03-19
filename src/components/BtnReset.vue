<script setup lang="ts">
import { store } from '../store'
</script>

<template>
  <button
    @click="store.reset"
    type="button"
    class="bg-rose-400 rounded-full border-2 border-rose-500 p-2 text-white font-bold"
  >
    Reset
  </button>
</template>
