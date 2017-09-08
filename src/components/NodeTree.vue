<template>
    <div id="loader">
    <div v-for="index in 100" :class="'icon-container anim delay'+index+' ' + color(index)">
      <div :class="'circle delay'+index+ ' ' +color(index)">
        <svgicon :icon="iconList.icons[getRandomInt(0, iconList.icons.length)]" width="32" height="32"></svgicon>
        <svg :class="'line delay'+index"
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           
           version="1.1"
           viewBox=".1 -.5 17.7 9.45"
           height="32"
           width="64">
          <defs
             />
          <metadata
             >
            <rdf:RDF>
              <cc:Work
                 rdf:about="">
                <dc:format>image/svg+xml</dc:format>
                <dc:type
                   rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                <dc:title></dc:title>
              </cc:Work>
            </rdf:RDF>
          </metadata>
          <g
             transform="translate(0,-288.53332)"
             >
            <circle
               class="svgCircle"
               r="4.2333331"
               cy="292.76666"
               cx="4.2333331"
               
               style="opacity:1;vector-effect:none;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" />
          </g>
        </svg>
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
    animation-name: tree, levitate;
    animation-duration: 1s, 2s;
    animation-iteration-count: 1, infinite;
    opacity: 0;
  }
}

@each $color, $hex in $colors {
  .#{$color} {
    div {
      background-color: $hex;
    }
    svg.svg-icon {
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
    svg.delay#{$i} {
      animation-delay: #{$i/5}s;
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
@keyframes levitate {
  from {
    opacity: 1;
  }
  50% {
    transform: translatey(0);
  }
  75% {
    transform: translatey(-3px);
  }
  to {
    transform: translatey(0);
    opacity: 1;
  }

}
@keyframes stroke {
  from {
    stroke-dashoffset: 51;
  }
  to {
    stroke-dashoffset: 89;
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
.line {
  stroke: white;
  stroke-width: 1;
  position: absolute;
  transform: translatex(20, 20);
  height: 100%;
  width: 200%;
  left: 0px;
  z-index: -100;
  fill: none;
  stroke-dasharray: 39;
  stroke-dashoffset: 51;
  animation: stroke 2s forwards;
}
.svgCircle {
  width: 32px;
  animation: stroke;
}
</style>


