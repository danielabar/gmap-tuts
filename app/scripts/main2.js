(function(window, $) {

  var $mapster = $('#map-canvas').mapster(Mapster.DEFAULT_OPTIONS);

  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883,
    content: '<div style="color: #foo;">Food is good</div>'
  });

})(window, jQuery);