(function(window, $) {

  var $mapster = $('#map-canvas').mapster(Mapster.DEFAULT_OPTIONS);

  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883,
    content: '<div style="color: #foo;">Food is good</div>'
  });

  $mapster.mapster('setPano', '#pip-pano', {
    position: {
      lat: 37.832383,
      lng: -122.472971
    },
    // Point of view, based on 360 degrees
    pov: {
      heading: 200,   // 200 degrees to the right
      pitch: 0        // 0 degrees up (can also be negative to go down)
    },
    events: [
      {
        name: 'position_changed',
        callback: function() {
          console.log('streetview position changed');
        }
      },
      {
        name: 'pov_changed',
        callback: function() {
          console.log('streetview pov changed');
        }
      },
      {
        name: 'links_changed',
        callback: function(e, panorama) {
          console.log('streetview links changed');
          console.dir(panorama.getLinks());
        }
      }
    ]
  });

})(window, jQuery);