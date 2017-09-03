<template>
    <div id="loader">
    <div :class="'icon-container anim delay'+1+' ' + color(getRandomInt(0, colors.length))">
        <div class="circle"> 
          <svgicon :icon="computedIcon" width="200" height="200"></svgicon>
        </div>
    </div>
    </div>
</template>

<script>
import './icons'
let list = require('./icons/list.json')

export default {
  props: ['id'],
  name: 'nodes',
  data () {
    return {
      iconList: list,
      colors: ['blue', 'green', 'red'],
      icon: 'godot'
    }
  },
  mounted: function () {
    this.addListeners()
    this.$el.childNodes[0].addEventListener('animationiteration', this.newIcon, false)
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
    },
    addListeners: function () {
      // this.$el.animi.addEventListener('animationiteration', this.test, false)
    },
    newIcon: function () {
      if (this.icon !== 'godot') {
        this.computedIcon = 'godot'
      } else {
        this.computedIcon = this.iconList.icons[this.getRandomInt(0, this.iconList.icons.length)]
      }
    }
  },
  computed: {
    computedIcon: {
      set: function (newIcon) {
        this.icon = newIcon
      },
      get: function () {
        return this.icon
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


 

$colors: (blue: #478CBF, darkblue: #454c62,alphawhite: #e0e0e0fe,green: #32C994,red: #fc9c9c);

.anim {
  animation-duration: 3s;
  animation-name: rotate;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0,.73,1,.39);
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
  width: 400px;
  height: 400px;
  border-radius: 100%;
  z-index: -100;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 20px solid #{map-get($colors, blue)};
}

@keyframes rotate {
  from {
    opacity: 1;
    transform: rotate3d(0, 1, 0, 90deg);
  }
  to {
    opacity: 1;
    transform: rotate3d(0, 1, 0, 270deg);
  }
}
.icon-container {
  margin: 1em;
  display: flex;
  align-items: center;
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


