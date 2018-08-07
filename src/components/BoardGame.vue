<template>
  <div class="dashboard">
    <h3>{{board.title}}</h3>
    <div class="game-board">
      <table>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(col, index) in cols" :key="index">
            .
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'boardgame',
    props: ['board'],
    computed: {
      rows: function() {
        const size = (parseInt(this.board.rows) <= 50) ? parseInt(this.board.rows) : 10
        return new Array(size  || 10)
      },
      cols: function() {
        const size = (parseInt(this.board.cols) <= 50) ? parseInt(this.board.cols) : 10
        return new Array(size  || 10)
      }
    }
  }
</script>
