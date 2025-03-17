<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { store } from '../store'

const props = defineProps<{
  tileNumber: number
}>()

const card = ref('')

onMounted(() => {
  card.value = store.tiles[props.tileNumber]
})

function play(event: any) {
  if (card.value != '') {
    return
  }
  card.value = store.turn
  store.tiles[props.tileNumber] = store.turn
  store.switch()
}
</script>

<template>
  <div @click="play" class="bg-sky-700 p-8 text-white text-center text-7xl">{{ card }}</div>
</template>
