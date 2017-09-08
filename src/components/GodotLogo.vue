<template>
  <div class="godotLogo"> 
    <div> 
      <img src="../assets/godot_logo.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'godot-logo',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.godotLogo {
  position: absolute;
  left: 0;
  right: 0;
  top: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparentize(white, .8);
  padding: 1.2em;
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


