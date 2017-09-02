<template>
  <div id="app">
    <circle-spinner :id="id"> </circle-spinner>
    <dot-loader :id="id"> </dot-loader>
    <stroke-offset :id="id"> </stroke-offset>
    <nodes :id="id"></nodes>
    <div class="select"> 
      <button v-on:click="selectId(0)"> Circle Spinner </button>
      <button v-on:click="selectId(1)"> Dot Loader </button>
      <button v-on:click="selectId(2)"> Stroke Offset </button>
      <button v-on:click="selectId(3)"> Nodes </button>
    </div>
  </div>
</template>

<script>
import CircleSpinner from './components/CircleSpinner'
import DotLoader from './components/DotLoader'
import StrokeOffset from './components/StrokeOffset'
import Nodes from './components/Nodes'

export default {
  name: 'app',
  components: {
    CircleSpinner,
    DotLoader,
    StrokeOffset,
    Nodes
  },
  data () {
    return {
      id: 0
    }
  },
  head: {
    title: {
      inner: 'Godot Animations'
    },
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  },
  methods: {
    selectId (n) {
      this.id = n
    }
  }
}
</script>

<style lang="scss">
$blue: #478CBF;
$green: #32C994;


#app {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

html {
  background-color: $blue;
}
.disable {
  display: none !important;
}
.select {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
