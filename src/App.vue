<template>
  <div id="app">
    <div id="loader">
      <div v-for="n in 4" :class='"spindle anim delay" + n + " " + color(n)'>
      </div>
      <img src="./assets/godot_logo.svg"/>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  methods: {
    color (n) {
      n = n % 2
      return n ? 'blue' : 'green'
    }
  }
}
</script>

<style lang="scss">
$blue: #478CBF;
$green: #32C994;
.green {
  border: 20px $green dashed;
}

.blue {
  border: 20px $blue dashed;
}

#loader {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
}
.spindle {
  width: 100%;
  height: 100%;
  z-index: -10;
  border-radius: 100%;
  position: absolute;
  transform: rotate(0.5turn);
}
.anim {
  animation-duration: 5s;
  animation-delay: .5s;
  animation-name: rotate;
  animation-iteration-count: infinite;
}

@for $i from 1 through 4 {

    .delay#{$i} {
      animation-delay: #{$i/2}s;
    }
}

.circle {
  display: none;
  width: 16px;
  height: 16px;
}

#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

@keyframes rotate {
  from {
    transform: rotate(0.25turn);
  }
  25% {
    transform: rotate(.5turn);
  }
  50% {
    transform: rotate(.75turn);
  }
  75% {
    transform: rotate(1turn);
  }
  to {
    transform: rotate(1.25turn);
  }

}
</style>
