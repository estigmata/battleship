<template>
  <div class="home container">
    <GameSettings />
    <YourFleet />
    <OpponentFleet />
  </div>
</template>

<script>
import GameSettings from '@/components/GameSettings.vue'
import YourFleet from '@/components/YourFleet.vue'
import OpponentFleet from '@/components/OpponentFleet.vue'

export default {
  name: 'home',
  components: {
    GameSettings,
    YourFleet,
    OpponentFleet
  }
}
</script>
