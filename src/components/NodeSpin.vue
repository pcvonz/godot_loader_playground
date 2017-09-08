<template>
    <div id="loader">
    <div v-for="index in 100" :class="'icon-container anim delay'+index+' ' + color(index)">
      <div :class="'circle delay'+index+  color(index)">
        <svgicon :icon="iconList.icons[getRandomInt(0, iconList.icons.length)]" width="32" height="32"></svgicon>
      </div>
    </div>
    <godot-logo> </godot-logo>
    </div>
</template>

<script>
import './icons'
import GodotLogo from './GodotLogo'
let list = require('./icons/list.json')
console.log(list)

export default {
  props: ['id'],
  name: 'nodes',
  components: { GodotLogo },
  data () {
    return {
      iconList: list,
      colors: ['blue', 'green', 'red']
    }
  },
  methods: {
    color (index) {
      let color = this.colors[index % this.colors.length]
      return color
     // return this.rgbToHex([index * 2, index * 2, index])
    },
    rgbToHex (rgb) {
      let hex = ''
      for (let val of rgb) {
        val = parseInt(val)
        val = Math.abs(val)
        if (val > 255) { val = 255 }
        val = (val).toString(16)
        if (val < 10) { val = '0' + val }
        hex += val
      }
      console.log(hex)
      return '#' + hex
    },
    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


 

$colors: (blue: #478CBF, darkblue: #454c62,alphawhite: #e0e0e0fe,green: #32C994,red: #fc9c9c);

.anim {
  div {
    position: relative;
    animation: tree 1s forwards;
    opacity: 0;
  }
}

@each $color, $hex in $colors {
  .#{$color} {
    div {
      background-color: $hex;
    }
    svg {
      fill: white;
    }
  }
}

@for $i from 0 through 100 {
    .delay#{$i} {
      div {
        animation-delay: #{$i/5}s;
      }
    }
}


.circle {
  padding: 1em;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes tree {
  from {
    opacity: 0;
    transform: rotate3d(0, 1, 0, 180deg);
    bottom: -32px;
  }
  70% {
    transform: rotate3d(0, 1, 0, 0);
    bottom: 10px;
    opacity: 1;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
}
.icon-container {
  margin: 1em;
}
#loader {
  background-color: #454c62 !important;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.godotLogo {
  position: absolute;
  left: 0;
  right: 0;
  top: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    background-color: white;
    border-radius: 100%;
    width: 12em;
    height: 12em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>


