<template>
    <div id="loader">
        <svg v-for="n in 5" :class='"anim delay" + n + " " + color(n)' :style='{ left: (n*50)-60+"px" }'
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
         xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
         width="16"
         height="16"
         viewBox="0 0 4.2333334 4.2333334"
         version="1.1"
         id="svg8"
         inkscape:version="0.92.2 5c3e80d, 2017-08-06"
         sodipodi:docname="circle_2.svg">
        <defs
           id="defs2" />
        <sodipodi:namedview
           id="base"
           pagecolor="#ffffff"
           bordercolor="#666666"
           borderopacity="1.0"
           inkscape:pageopacity="0.0"
           inkscape:pageshadow="2"
           inkscape:zoom="11.2"
           inkscape:cx="6.1563987"
           inkscape:cy="6.5623373"
           inkscape:document-units="mm"
           inkscape:current-layer="layer1"
           showgrid="false"
           fit-margin-top="0"
           fit-margin-left="0"
           fit-margin-right="0"
           fit-margin-bottom="0"
           units="px"
           inkscape:snap-page="true"
           inkscape:snap-bbox="true"
           inkscape:bbox-paths="true"
           inkscape:bbox-nodes="true"
           inkscape:snap-bbox-midpoints="true"
           inkscape:window-width="1680"
           inkscape:window-height="993"
           inkscape:window-x="1280"
           inkscape:window-y="28"
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
           transform="translate(-38.931547,-114.36191)">
          <circle
             style="opacity:1;vector-effect:none;fill-opacity:1;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="path815"
             cx="41.04821"
             cy="116.47857"
             r="2.1166606" />
        </g>
              </svg>
      <img src="../assets/godot_logo.svg"/>
    </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'dot-loader',
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
.green {
  fill: $green;
  stroke: $blue;
}

.blue {
  fill: $green;
  stroke: $blue;
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
  border-radius: 100%;
  position: absolute;
  bottom: -40px;
  stroke-width: .5;
  stroke-dasharray: 50;
}
.anim {
  animation-duration: 4s;
  animation-delay: .5s;
  animation-name: dot;
  animation-iteration-count: infinite;
}

@for $i from 1 through 5 {
    .delay#{$i} {
      animation-delay: #{$i/2}s;
    }
}


.circle {
  display: none;
  width: 16px;
  height: 16px;
}
@keyframes dot {
  from {
    width: 16px;
    height: 16px;
    transform: scale(1, 1) translate(0, 0);
  }
  50% {
    transform: scale(2, 2) translate(0px, 10px);
  }
  to {
    transform: scale(1, 1) translate(0px, 0);
  }
}
</style>


