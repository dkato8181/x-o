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

let turn: string = 'X'

let movesX: number[] = []

let movesO: number[] = []

let winningCombinations: string[] = ['123', '456', '789', '147', '258', '369', '159', '357']

function checkForMatch(arr: number[]): void {
  if (arr.length < 3) {
    return
  }
  for (let i = 0; i <= arr.length - 3; i++) {
    let begin = i
    let end = i + 3
    let slice = arr.slice(begin, end).join('')
    if (winningCombinations.includes(slice)) {
      alert(store.turn + ' wins')
    }
  }
}

export const store = reactive({
  turn: turn,
  tiles: tiles,
  movesX: movesX,
  movesO: movesO,
  reset() {
    for (let key in this.tiles) {
      if (this.tiles.hasOwnProperty(key)) {
        this.tiles[key] = ''
        this.turn = 'X'
      }
    }
    this.movesX = []
    this.movesO = []
  },
  switch() {
    if (this.turn == 'X') {
      checkForMatch(this.movesX)
      this.turn = 'O'
    } else if (this.turn == 'O') {
      checkForMatch(this.movesO)
      this.turn = 'X'
    }
  },
  addMove(t: number) {
    if (this.turn == 'X') {
      this.movesX.push(t)
      this.movesX.sort()
    } else if (this.turn == 'O') {
      this.movesO.push(t)
      this.movesO.sort()
    }
  },
})
