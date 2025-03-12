import { reactive } from 'vue'

export const store = reactive({
  turn: 'X',
  switch() {
    if (this.turn == 'X') {
      this.turn = 'O'
    } else if (this.turn == 'O') {
      this.turn = 'X'
    }
  },
})
