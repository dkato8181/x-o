<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { store } from '../store'

const props = defineProps<{
  tileNumber: number
}>()

const card = ref('')

onMounted(() => {
  card.value = store.tiles[props.tileNumber]
})

watch(
  () => store.tiles[props.tileNumber],
  () => {
    card.value = store.tiles[props.tileNumber]
  },
)

function play() {
  if (store.gameDone) {
    return
  }
  if (card.value != '') {
    return
  }
  store.tiles[props.tileNumber] = store.turn
  store.addMove(props.tileNumber)
  if (store.checkForMatch(store.turn)) {
    setTimeout(() => {
      alert(store.turn + ' WINS!!!')
    }, 500)
    return
  }
  store.switch()
}
</script>

<template>
  <div @click="play" class="w-30 h-30 bg-sky-700 p-8 text-white text-center text-7xl">
    {{ card }}
  </div>
</template>
