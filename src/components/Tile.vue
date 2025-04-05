<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { store } from '../store'

const props = defineProps<{
  tileNumber: number
}>()

const emit = defineEmits(['computerTurn'])

const card = ref('')

const inWinningPattern = computed(() => {
  return store.winningPattern.includes(props.tileNumber)
})

onMounted(() => {
  card.value = store.tiles[props.tileNumber]
})

watch(
  () => store.tiles[props.tileNumber],
  () => {
    card.value = store.tiles[props.tileNumber]
  },
)

function setTile(): void {
  if (store.gameDone) {
    return
  }
  if (card.value != '') {
    return
  }
  store.play(props.tileNumber)
  emit('computerTurn')
}
</script>

<template>
  <div
    @click="setTile"
    :class="[
      inWinningPattern ? 'font-bold bg-sky-900 scale-108' : 'bg-sky-700',
      'w-30 h-30 p-8 text-white text-7xl text-center hover:bg-sky-800',
    ]"
  >
    {{ card }}
  </div>
</template>
