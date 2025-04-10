import { reactive } from 'vue'
import sound from './assets/sound/level-completed.wav'

type Tiles = {
  [key: number]: string
}

type Moves = {
  [key: string]: number[]
}

type SwapMap = {
  [key: string]: string
}

type defenseCombination = {
  [key: string]: number
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

let turn: string = 'X'

const moves: Moves = {
  X: [],
  O: [],
}

const winningCombinations: string[] = ['123', '456', '789', '147', '258', '369', '159', '357']

const defenseCombinations: defenseCombination = {
  '12': 3,
  '23': 1,
  '13': 2,
  '45': 6,
  '56': 4,
  '46': 5,
  '78': 9,
  '89': 7,
  '79': 8,
  '14': 7,
  '47': 1,
  '17': 4,
  '25': 8,
  '58': 2,
  '28': 5,
  '36': 9,
  '69': 3,
  '39': 6,
  '15': 9,
  '59': 1,
  '19': 5,
  '35': 7,
  '57': 3,
  '37': 5,
}

const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const winningPattern: number[] = []

const audio: HTMLAudioElement = new Audio(sound)

const swapMap: SwapMap = {
  X: 'O',
  O: 'X',
}

function checkForMatch(turn: string): boolean {
  if (moves[turn].length < 3) {
    return false
  }
  for (let i = 0; i <= moves[turn].length - 3; i++) {
    const slice = moves[turn].slice(i, i + 3)
    if (winningCombinations.includes(slice.join(''))) {
      store.winningPattern = slice
      store.gameDone = true
      return true
    }
  }
  return false
}

function swap(): void {
  store.turn = swapMap[store.turn]
}

function addMove(t: number): void {
  moves[store.turn].push(t)
  moves[store.turn].sort()
}

function removeTileNumber(tileNumber: number): void {
  const index: number = store.possibleValues.indexOf(tileNumber)
  store.possibleValues.splice(index, 1)
}

function playSound(): void {
  audio.volume = 0.3
  audio.play()
}

function getBestNumber(turn: string): number {
  const opponentTurn = swapMap[turn]
  let bestNumber: number =
    store.possibleValues[Math.floor(Math.random() * store.possibleValues.length)]
  if (moves[opponentTurn].length < 2) {
    return bestNumber
  }
  for (let i = 0; i <= moves[opponentTurn].length - 2; i++) {
    const slice = moves[opponentTurn].slice(i, i + 2)
    if (defenseCombinations.hasOwnProperty(slice.join(''))) {
      let possibleNumber = defenseCombinations[slice.join('')]
      if (!moves[turn].includes(possibleNumber)) {
        return possibleNumber
      }
    }
  }
  return bestNumber
}

export const store = reactive({
  gameDone: false,
  turn: turn,
  tiles: tiles,
  moves: moves,
  possibleValues: possibleValues,
  winningPattern: winningPattern,
  play(tileNumber: number): void {
    this.tiles[tileNumber] = this.turn
    addMove(tileNumber)
    removeTileNumber(tileNumber)
    if (checkForMatch(this.turn)) {
      playSound()
      setTimeout(() => {
        alert(this.turn + ' WINS!!!')
      }, 500)
      return
    }
    swap()
  },
  reset() {
    for (let key in this.tiles) {
      if (this.tiles.hasOwnProperty(key)) {
        this.tiles[key] = ''
      }
    }
    this.turn = 'X'
    moves['X'] = []
    moves['O'] = []
    this.winningPattern = []
    this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.gameDone = false
  },
  getBestNumber: getBestNumber,
})
