<template>
  <div class="container">
    <div class="settings">
      <h1>Game Settings</h1>
      <label>Rows Size Board:</label>
      <div class="form-input">
        <input v-model="rowSize" />
      </div>
      <label>Columns Size Board:</label>
      <div class="form-input">
        <input v-model="colSize" />
      </div>
      <br />
      <br />
      <hr />
      <div class="dropzone">
        <Docker></Docker>
      </div>
    </div>
    <BoardGame :board="{title: 'Your Fleet', rows: rowSize, cols: colSize, isDropZone: true}" />
    <BoardGame :board="{title: 'Opponent Fleet', rows: rowSize, cols: colSize}" />
  </div>
</template>

<script>
import BoardGame from '@/components/BoardGame.vue'
import Docker from '@/components/Docker.vue'

export default {
  name: 'gamesettings',
  data: () => ({
    rowSize: 10,
    colSize: 10
  }),
  components: {
    BoardGame,
    Docker
  }
}
</script>

<style>

</style>
