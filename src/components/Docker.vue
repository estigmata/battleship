<template>
  <div class="docker">
    <div v-for="(ship, index) in ships" :key="index"
      :class="ship.className"
      @dblclick="rotate(ship, $event)"
      v-drag-drop-ship="{
        dropzone: 'dropzone',
        draggable: true,
        ondragstart: 'event.dataTransfer.setData(\'text/plain\', null)',
        target: 'purple'
      }">
      {{ship.name}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'docker',
    data: () => ({
      ships: [
        {
          name: 'Carrier',
          className: 'ship carrier horizontal'
        },
        {
          name: 'Battleship',
          className: 'ship battleship horizontal'
        },
        {
          name: 'Destroyer',
          className: 'ship destroyer horizontal'
        },
        {
          name: 'Cruiser',
          className: 'ship cruiser horizontal'
        },
        {
          name: 'Frigate',
          className: 'ship frigate horizontal'
        },
        {
          name: 'Corvette',
          className: 'ship corvette horizontal'
        },
        {
          name: 'Sub',
          className: 'ship submarine horizontal'
        }
      ]
    }),
    methods: {
      rotate: function(ship, event) {
        if (event.path[3].className === 'game-board') {
          const shipType = event.path[0].className.split(' ')[1]
          const orientation = event.path[0].className.split(' ')[2]
          ship.className = this.changeOrientation(shipType, orientation)
        }
      },
      changeOrientation: function(ship, orientation) {
        return orientation === 'horizontal' ? `ship ${ship} vertical` : `ship ${ship} horizontal`
      }
    }
  }
</script>

<style>
.carrier.horizontal {
  height: 20px;
  width: 146px;
}

.carrier.vertical {
  height: 146px;
  width: 20px;
  writing-mode: vertical-rl;
}

.battleship.horizontal {
  height: 20px;
  width: 125px;
}

.battleship.vertical {
  height: 125px;
  width: 20px;
  writing-mode: vertical-rl;
}

.destroyer.horizontal {
  height: 20px;
  width: 104px;
}

.destroyer.vertical {
  height: 104px;
  width: 20px;
  writing-mode: vertical-rl;
}

.cruiser.horizontal {
  height: 20px;
  width: 83px;
}

.cruiser.vertical {
  height: 83px;
  width: 20px;
  writing-mode: vertical-rl;
}

.frigate.horizontal {
  height: 20px;
  width: 83px;
}

.frigate.vertical {
  height: 83px;
  width: 20px;
  writing-mode: vertical-rl;
}

.corvette.horizontal {
  height: 20px;
  width: 62px;
}

.corvette.vertical {
  height: 62px;
  width: 20px;
  writing-mode: vertical-rl;
}

.submarine.horizontal {
  height: 20px;
  width: 41px;
}

.submarine.vertical {
  height: 41px;
  width: 20px;
  writing-mode: vertical-rl;
}

.ship {
  background: blueviolet;
  color: white;
  font-size: 10px;
  line-height: 20px;
  position: relative;
  text-align: center;
}
</style>
