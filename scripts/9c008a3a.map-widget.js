!function(a,b){$.widget("mapster.mapster",{options:{},_create:function(){var a=this.element[0],b=this.options;this.map=Mapster.create(a,b)},_refresh:function(){},addMarker:function(a){return this.map.addMarker(a)},setLocation:function(a){var c=$.extend({},b.DEFAULT_OPTIONS,a);this.map.setOpts(c)},setCustomStyles:function(){var a=$.extend({},b.DEFAULT_OPTIONS,{styles:b.CUSTOM_STYLES});this.map.setOpts(a)},addMarkerGeo:function(a){var b=this;this.map.geocode({address:a.location,success:function(c){c.forEach(function(c){a.lat=c.geometry.location.lat(),a.lng=c.geometry.location.lng(),a.content=c.formatted_address,b.map.addMarker(a)})},error:function(){}})},findMarkers:function(a){this.map.findBy(a)},removeMarkers:function(a){this.map.removeBy(a)},markers:function(){return this.map.markers.items},getCurrentPosition:function(a){this.map.getCurrentPosition(a)},setPano:function(a,b){var c=this,d=$(a);$.each(d,function(a,d){c.map.setPano(d,b)})},_destroy:function(){},_setOptions:function(){this._superApply(arguments),this._refresh()},_setOption:function(a,b){this._super(a,b)}})}(window,window.Mapster||(window.Mapster={})),function(a,b){var c=b("#map-canvas").mapster(Mapster.DEFAULT_OPTIONS);c.mapster("setCustomStyles",{}),c.mapster("addMarker",{lat:37.79135,lng:-122.435883,content:'<div style="color: #foo;">Food is good</div>'}),c.mapster("setPano","#pip-pano",{position:{lat:37.832383,lng:-122.472971},pov:{heading:200,pitch:0},events:[{name:"position_changed",callback:function(){}},{name:"pov_changed",callback:function(){}},{name:"links_changed",callback:function(){}}]}),c.mapster("addMarkerGeo",{location:"Golden Gate Bridge, San Francisco, CA"}),c.mapster("addMarkerGeo",{location:"1111 Main Street",events:[{name:"click",callback:function(a){c.mapster("setPano","#pip-pano",{position:{lat:a.latLng.lat(),lng:a.latLng.lng()}})}}]}),c.mapster("getCurrentPosition",function(a){c.mapster("addMarker",{lat:a.coords.latitude,lng:a.coords.longitude}),c.mapster("setLocation",{center:{lat:a.coords.latitude,lng:a.coords.longitude}}),c.mapster("setPano","#pip-pano",{position:{lat:a.coords.latitude,lng:a.coords.longitude}})})}(window,jQuery);