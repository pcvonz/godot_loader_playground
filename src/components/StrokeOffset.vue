<template>
    <div id="loader">
        <svg v-for="n in 2" :class='"anim delay" + n + " " + color(n)' 
           xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
           xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
           width="88.733482mm"
           height="88.733482mm"
           viewBox="0 0 88.733482 88.733482"
           version="1.1"
           id="svg8"
           inkscape:version="0.92.2 5c3e80d, 2017-08-06"
           sodipodi:docname="circle.svg">
          <defs
             id="defs2" />
          <sodipodi:namedview
             id="base"
             pagecolor="#ffffff"
             bordercolor="#666666"
             borderopacity="1.0"
             inkscape:pageopacity="0.0"
             inkscape:pageshadow="2"
             inkscape:zoom="0.49497475"
             inkscape:cx="135.84044"
             inkscape:cy="-65.576707"
             inkscape:document-units="mm"
             inkscape:current-layer="layer1"
             showgrid="false"
             fit-margin-top="0"
             fit-margin-left="0"
             fit-margin-right="0"
             fit-margin-bottom="0"
             inkscape:window-width="1280"
             inkscape:window-height="965"
             inkscape:window-x="0"
             inkscape:window-y="30"
             inkscape:window-maximized="1" />
          <metadata
             id="metadata5">
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
             inkscape:label="Layer 1"
             inkscape:groupmode="layer"
             id="layer1"
             transform="translate(-37.417736,-43.628483)">
            <circle
               style="opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1"
               id="path815"
               cx="81.784477"
               cy="87.995224"
               r="44.366741" />
          </g>
        </svg>
      <img src="../assets/godot_logo.svg"/>
    </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'stroke-offset',
  data () {
    return {
    }
  },
  methods: {
    color (n) {
      n = n % 2
      return n ? 'blue' : 'green'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$blue: #478CBF;
$green: #32C994;
$dashinit: 30;
.green {
  stroke: $green;
}

.blue {
  stroke: $blue;
  transform: rotate(.5turn);
}

#loader {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  background-color: white;
  border: 10px solid white;
  border-radius: 100%;
}
svg {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  stroke-width: 10px;
  stroke-dasharray: $dashinit;
}
.anim {
  animation-duration: 2s;
  animation-delay: .5s;
  animation-name: stroke-offset;
  animation-iteration-count: infinite;
}

@for $i from 1 through 4 {
    .delay#{$i} {
      animation-delay: #{$i/2}s;
    }
}

@keyframes stroke-offset {
  from {
    stroke-dasharray: $dashinit;
  }
  50% {
    stroke-dasharray: 100;
  }
  to {
    stroke-dasharray: $dashinit;
  }
}


.circle {
  display: none;
  width: 16px;
  height: 16px;
}
</style>


