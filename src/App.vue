<template>
  <div id="app">
    <div id="anim">
      <router-view></router-view>
    </div>
    <div class="select" :class="{ hide: isHidden }"> 
      <a id="menuToggle" v-on:click="isHidden = !isHidden"> 
        <hamburger :state="{ open: !isHidden }"> </hamburger>
      </a>
      <router-link v-for="route in routes" :to="route.route"> {{ route.name }}</router-link>
    </div>
  </div>
</template>

<script>
import Hamburger from './components/Hamburger'
export default {
  components: {
    Hamburger
  },
  name: 'app',
  data () {
    return {
      id: 0,
      isHidden: true,
      routes: [
        {name: 'Nodes', route: '/nodes'},
        {name: 'CircleSpinner', route: '/circlespinner'},
        {name: 'DotLoader', route: '/dotloader'},
        {name: 'StrokeOffset', route: '/strokeoffset'},
        {name: 'Spin', route: '/spin'},
        {name: 'Node Spin', route: '/nodespin'},
        {name: 'Node Spin Stroke', route: '/nodespinstroke'}
      ]
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
  },
  computed: {
    menu: function () {
      return this.isHidden ? 'Open' : 'Close'
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
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

.disable {
  display: none !important;
}
.select {
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  height: 100%;
  width: 14em;
  transition: width .2s;
  a {
    text-decoration: none;
    font-weight: 400;
    color: white;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1.2em;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: $green;
    background-color: darken($blue, 10%);
  }
}

.hide {
  width: 0;
  #menuToggle {
    position: absolute;
    right: 1em;
    display: inline;
    width: auto;
  }
}


body {
  padding: 0;
  margin: 0;
}
#menuToggle {
  width: 2em;
  padding: 0;
  position: relative;
  top: .5em;
  right: 2.5em;
  cursor: pointer;
  margin-bottom: 2em;
}

#menuToggle:hover {
  background-color: unset;
}

#anim {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
