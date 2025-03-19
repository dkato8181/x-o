import { reactive } from 'vue'

type Tiles = {
  [key: number]: string
}

let tiles: Tiles = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
}

export const store = reactive({
  turn: 'X',
  tiles: tiles,
  reset() {
    for (let key in this.tiles) {
      if (this.tiles.hasOwnProperty(key)) {
        this.tiles[key] = ''
        this.turn = 'X'
      }
    }
  },
  switch() {
    if (this.turn == 'X') {
      this.turn = 'O'
    } else if (this.turn == 'O') {
      this.turn = 'X'
    }
  },
})
