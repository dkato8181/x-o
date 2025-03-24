import { reactive } from 'vue'

type Tiles = {
  [key: number]: string
}

type Moves = {
  [key: string]: number[]
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

let moves: Moves = {
  X: [],
  O: [],
}

let winningCombinations: string[] = ['123', '456', '789', '147', '258', '369', '159', '357']

function checkForMatch(turn: string): boolean {
  if (store.moves[turn].length < 3) {
    return false
  }
  for (let i = 0; i <= store.moves[turn].length - 3; i++) {
    let begin = i
    let end = i + 3
    let slice = store.moves[turn].slice(begin, end).join('')
    if (winningCombinations.includes(slice)) {
      store.gameDone = true
      return true
    }
  }
  return false
}

export const store = reactive({
  gameDone: false,
  turn: turn,
  tiles: tiles,
  moves: moves,
  reset() {
    for (let key in this.tiles) {
      if (this.tiles.hasOwnProperty(key)) {
        this.tiles[key] = ''
      }
    }
    this.turn = 'X'
    this.moves['X'] = []
    this.moves['O'] = []
    this.gameDone = false
  },
  switch() {
    if (this.turn == 'X') {
      this.turn = 'O'
    } else if (this.turn == 'O') {
      this.turn = 'X'
    }
  },
  addMove(t: number) {
    store.moves[this.turn].push(t)
    store.moves[this.turn].sort()
  },
  checkForMatch: checkForMatch,
})
