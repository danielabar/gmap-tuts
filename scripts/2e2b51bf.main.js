!function(a,b,c){c.DEFAULT_OPTIONS={center:{lat:37.79135,lng:-122.435883},zoom:10}}(window,google,window.Mapster||(window.Mapster={})),function(a,b,c,d){var e,f=document.getElementById("map-canvas"),g=function(){h(),j(d.DEFAULT_OPTIONS)},h=function(){c("#setDefaultOptions").on("click",i.bind(null)),c("#removeUIControls").on("click",i.bind({disableDefaultUI:!0})),c("#disableScrollZoom").on("click",i.bind({scrollwheel:!1})),c("#disableDrag").on("click",i.bind({draggable:!1})),c("#mapTypeHybrid").on("click",i.bind({mapTypeId:b.maps.MapTypeId.HYBRID})),c("#mapTypeSatellite").on("click",i.bind({mapTypeId:b.maps.MapTypeId.SATELLITE})),c("#minMaxZoom").on("click",i.bind({minZoom:9,maxZoom:11})),c("#controlBottomLeftSmall").on("click",i.bind({zoomControlOptions:{position:b.maps.ControlPosition.BOTTOM_LEFT,style:b.maps.ZoomControlStyle.SMALL}})),c("#panControlBottomLeft").on("click",i.bind({panControlOptions:{position:b.maps.ControlPosition.BOTTOM_LEFT}}))},i=function(a){var b=c.extend({},d.DEFAULT_OPTIONS,this);j(b),a.preventDefault()},j=function(a){e=new b.maps.Map(f,a)};g()}(window,google,jQuery,window.Mapster||(window.Mapster={}));