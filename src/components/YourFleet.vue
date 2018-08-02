<template>
  <div class="dashboard">
    <h3>Your Fleet</h3>
    <div class="game-board">
      <table>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(col, index) in cols" :key="index">
            &nbsp;
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'opponentfleet',
  props: ['boardSize'],
  computed: {
    rows: function() {
      let size = (parseInt(this.boardSize.rows) <= 50) ? parseInt(this.boardSize.rows) : 10
      return new Array(size  || 10)
    },
    cols: function() {
      let size = (parseInt(this.boardSize.cols) <= 50) ? parseInt(this.boardSize.cols) : 10
      return new Array(size  || 10)
    }
  }
}
</script>
