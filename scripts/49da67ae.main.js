!function(a,b){var c=function(){function a(a,c){this.gMap=new b.maps.Map(a,c)}return a.prototype={setOpts:function(a){a&&this.gMap.setOptions(a)},zoom:function(a){return a?void this.gMap.setZoom(a):this.gMap.getZoom()},registerHandler:function(a){b.maps.event.addListener(this.gMap,"click",function(b){a({lat:b.latLng.lat(),lng:b.latLng.lng()})})}},a}();c.create=function(a,b){return new c(a,b)},a.Mapster=c}(window,google),function(a,b,c){c.DEFAULT_OPTIONS={zoom:10,minZoom:null,maxZoom:null,disableDefaultUI:!1,scrollWheel:!0,draggable:!0,mapTypeId:b.maps.MapTypeId.ROADMAP,center:{lat:37.79135,lng:-122.435883},zoomControlOptions:{position:b.maps.ControlPosition.TOP_LEFT,style:b.maps.ZoomControlStyle.DEFAULT},panControlOptions:{position:b.maps.ControlPosition.TOP_LEFT}},c.DISABLE_DEFAULT_UI={disableDefaultUI:!0},c.DISABLE_SCROLL_ZOOM={scrollwheel:!1},c.DISABLE_DRAG={draggable:!1},c.MAP_TYPE_HYBRID={mapTypeId:b.maps.MapTypeId.HYBRID},c.MAP_TYPE_SATELLITE={mapTypeId:b.maps.MapTypeId.SATELLITE},c.MIN_MAX_ZOOM={minZoom:9,maxZoom:11},c.CONTROL_BOTTOM_LEFT_SMALL={zoomControlOptions:{position:b.maps.ControlPosition.BOTTOM_LEFT,style:b.maps.ZoomControlStyle.SMALL}},c.PAN_CONTROL_BOTTOM_LEFT={panControlOptions:{position:b.maps.ControlPosition.BOTTOM_LEFT}}}(window,google,window.Mapster||(window.Mapster={})),function(a,b,c){var d,e=document.getElementById("map-canvas"),f=18,g=function(){h(c.DEFAULT_OPTIONS),k()},h=function(a){d=c.create(e,a),d.zoom(f),d.registerHandler(i),n(d)},i=function(a){b("#latValue").text(j(a.lat)),b("#lngValue").text(j(a.lng))},j=function(a){return Math.round(1e4*a)/1e4},k=function(){b("#setDefaultOptions").on("click",l),b("#removeUIControls").on("click",m.bind(c.DISABLE_DEFAULT_UI)),b("#disableScrollZoom").on("click",m.bind(c.DISABLE_SCROLL_ZOOM)),b("#disableDrag").on("click",m.bind(c.DISABLE_DRAG)),b("#mapTypeHybrid").on("click",m.bind(c.MAP_TYPE_HYBRID)),b("#mapTypeSatellite").on("click",m.bind(c.MAP_TYPE_SATELLITE)),b("#minMaxZoom").on("click",m.bind(c.MIN_MAX_ZOOM)),b("#controlBottomLeftSmall").on("click",m.bind(c.CONTROL_BOTTOM_LEFT_SMALL)),b("#panControlBottomLeft").on("click",m.bind(c.PAN_CONTROL_BOTTOM_LEFT))},l=function(a){h(c.DEFAULT_OPTIONS),a.preventDefault()},m=function(a){var e=b.extend({},c.DEFAULT_OPTIONS,this);d.setOpts(e),n(d),a.preventDefault()},n=function(a){b("#zoomValue").text(a.zoom())};g()}(window,jQuery,window.Mapster||(window.Mapster={}));