import { reactive } from 'vue'
import sound from './assets/sound/level-completed.wav'

type Tiles = {
  [key: number]: string
}

type Moves = {
  [key: string]: number[]
}

const tiles: Tiles = {
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

const turn: string = 'X'

const moves: Moves = {
  X: [],
  O: [],
}

const winningCombinations: string[] = ['123', '456', '789', '147', '258', '369', '159', '357']

const winningPattern: number[] = []

const audio: HTMLAudioElement = new Audio(sound)

function checkForMatch(turn: string): boolean {
  if (store.moves[turn].length < 3) {
    return false
  }
  for (let i = 0; i <= store.moves[turn].length - 3; i++) {
    const slice = store.moves[turn].slice(i, i + 3)
    if (winningCombinations.includes(slice.join(''))) {
      store.winningPattern = slice
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
  winningPattern: winningPattern,
  reset() {
    for (let key in this.tiles) {
      if (this.tiles.hasOwnProperty(key)) {
        this.tiles[key] = ''
      }
    }
    this.turn = 'X'
    this.moves['X'] = []
    this.moves['O'] = []
    store.winningPattern = []
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
  playSound: function playSound(): void {
    audio.volume = 0.3
    audio.play()
  },
})
