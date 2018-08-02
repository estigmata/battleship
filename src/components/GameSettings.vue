<template>
  <div class="container">
    <div class="settings">
      <h1>Game Settings</h1>
      <label>Size Board:</label>
      <div class="form-input">
        <input v-model="size">
      </div>
    </div>
    <YourFleet :boardSize="size" />
    <OpponentFleet :boardSize="size" />
  </div>
</template>

<script>
import YourFleet from '@/components/YourFleet.vue'
import OpponentFleet from '@/components/OpponentFleet.vue'

export default {
  name: 'gamesettings',
  data: () => ({ size: '10' }),
  components: {
    YourFleet,
    OpponentFleet
  }
}
</script>
