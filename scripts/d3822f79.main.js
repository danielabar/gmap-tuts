!function(a,b){var c,d=document.getElementById("map-canvas"),e={center:{lat:37.79135,lng:-122.435883},zoom:10},f=function(a){c=new b.maps.Map(d,a)},g=function(){$("#setDefaultOptions").on("click",function(a){f(e),a.preventDefault()}),$("#removeUIControls").on("click",function(a){var b=$.extend({},e,{disableDefaultUI:!0});f(b),a.preventDefault()})},h=function(){g(),f(e)};h()}(window,google);