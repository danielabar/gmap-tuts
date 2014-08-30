(function(window, $) {

  var $mapster = $('#map-canvas').mapster(Mapster.DEFAULT_OPTIONS);
  // var geocoder = new google.maps.Geocoder();

  // Marker by geographic co-ordinates
  $mapster.mapster('addMarker', {
    lat: 37.791350,
    lng: -122.435883,
    content: '<div style="color: #foo;">Food is good</div>'
  });

  // Street view panorama
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
          // console.log('streetview position changed');
        }
      },
      {
        name: 'pov_changed',
        callback: function() {
          // console.log('streetview pov changed');
        }
      },
      {
        name: 'links_changed',
        callback: function(e, panorama) {
          // console.log('streetview links changed');
          // console.dir(panorama.getLinks());
        }
      }
    ]
  });

  // Marker by location
  $mapster.mapster('addMarkerGeo', {
    location: 'Golden Gate Bridge, San Francisco, CA'
  });

  // Will find all the '1111 Main Street' and mark them on map
  $mapster.mapster('addMarkerGeo', {
    location: '1111 Main Street'
  });

  // results is array of places returned from geocode search
  // each place has a location, providing its lat and lng
  // var geocode = function(opts) {
  //   geocoder.geocode({
  //     address: opts.address
  //   }, function(results, status) {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       opts.success.call(this, results);
  //     } else {
  //       opts.error.call(this, status);
  //     }
  //   });
  // };

  // geocode({
  //   address: 'Golden Gate Bridge, San Francisco, CA',
  //   success: function(results) {
  //     $mapster.mapster('addMarker', {
  //       lat: results[0].geometry.location.lat(),
  //       lng: results[0].geometry.location.lng()
  //     });
  //   },
  //   error: function(status) {
  //     console.error(status);
  //   }
  // });


})(window, jQuery);