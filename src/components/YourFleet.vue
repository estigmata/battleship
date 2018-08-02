<template>
  <div class="dashboard">
    <h3>Your Fleet</h3>
    <div class="game-board">
      <table>
        <tr v-for="(row, index) in cells" :key="index">
          <td v-for="(col, index) in cells" :key="index">
            &nbsp;
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'yourfleet',
    props: ['boardSize'],
    computed: {
      cells: function() {
        let size = (parseInt(this.boardSize) <= 50) ? parseInt(this.boardSize) : 10
        return new Array(size  || 10)
      }
    }
  }
</script>
