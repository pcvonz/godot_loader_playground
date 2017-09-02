<template>
    <div id="loader">
    <div v-for="index in 100" :class="'icon-container anim delay'+index+' ' + color(index)">
        <svgicon :icon="iconList.icons[getRandomInt(0, iconList.icons.length)]" width="64" height="64"></svgicon>
    </div>
      <img src="../assets/godot_logo.svg"/>
    </div>
</template>

<script>
import './icons'
let list = require('./icons/list.json')
console.log(list)

export default {
  props: ['id'],
  name: 'nodes',
  data () {
    return {
      iconList: list,
      colors: ['blue', 'alphawhite', 'green', 'red']
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

svg {
  opacity: 0;
}
.anim {
  svg {
      animation-duration: 3s;
      animation-name: dot;
      animation-iteration-count: infinite;
  }
}

@each $color, $hex in $colors {
  .#{$color} {
    svg {
      fill: $hex;
    }
  }
}

@for $i from 0 through 100 {
    .delay#{$i} svg {
      animation-delay: #{$i/5}s;
    }
}


.circle {
  display: none;
  width: 16px;
  height: 16px;
}
@keyframes dot {
  from {
    opacity: 0;
    transform: scale(.2);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(.8);
  }
}
.icon-container {
  margin: 1em;
}
img {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 38%;
  background-color: white;
  border-radius: 100%;
  padding: 2em;
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
</style>


