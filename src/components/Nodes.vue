<template>
    <div id="loader" :class="{ disable: this.id != 3 }">
    <div v-for="index in 100" :class="'icon-container anim delay'+index">
        <svgicon :icon="iconList.icons[index]" width="64" height="64"></svgicon>
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
      iconList: list
    }
  },
  methods: {
    color (n) {
      n = n % 2
      return n ? '#476CBF' : '#32C994'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$blue: #478CBF;
$green: #32C994;
.green {
  fill: $green;
  stroke: $blue;
}

.blue {
  fill: $green;
  stroke: $blue;
}

#loader {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
svg {
  opacity: 0;
}
.anim {
  svg {
      animation-duration: 6s;
      animation-name: dot;
      animation-iteration-count: infinite;
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
    color: $blue;
    opacity: 1;
  }
  50% {
    color: $green;
    opacity: 1;
  }
  to {
    color: $blue;
    opacity: 1;
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
</style>


