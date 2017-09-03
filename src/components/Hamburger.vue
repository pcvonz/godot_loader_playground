<template>
  <div>
<svg 
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 8.4666659 8.4666659"
   height="32"
   width="32">
  <defs
     id="defs2" />
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
  <g :class="state"
     id="layer1">
    <rect
       transform="translate(0,-288.53334)"
       ry="0"
       rx="3.037761"
       y="288.53333"
       x="5.2735594e-16"
       height="1.8267163"
       width="8.4666662"
       id="rect815"
       style="opacity:1;vector-effect:none;fill-opacity:1;stroke-width:0.03058442;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
  </g>
  <g :class="state" 
     id="layer2">
    <rect
       transform="translate(0,-288.53334)"
       style="opacity:1;vector-effect:none;fill-opacity:1;stroke-width:0.03058442;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       id="rect817"
       width="8.4666662"
       height="1.8267163"
       x="5.2735594e-16"
       y="291.8533"
       rx="0"
       ry="0" />
  </g>
  <g :class="state"
     id="layer3">
    <rect
       transform="translate(0,-288.53334)"
       ry="0"
       rx="0"
       y="295.17328"
       x="5.2735594e-16"
       height="1.8267163"
       width="8.4666662"
       id="rect819"
       style="opacity:1;vector-effect:none;fill-opacity:1;stroke-width:0.03058442;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
  </g>
  </svg>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: ['state'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#layer1, #layer2, #layer3 {
  transition: all .5s;
  fill: white;
}
#layer1.open {
  transform-origin: center top;
  transform: translatey(3px) rotate(45deg) translatex(1px);
}
#layer2.open {
  transform-origin: center center;
  transform: rotate(-45deg);
}
#layer3.open {
  transform-origin: center center;
  transform: rotate(45deg) translatey(5px);
}
</style>
