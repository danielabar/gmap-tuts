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
    location: '1111 Main Street',
    events: [
      {
        name: 'click',
        callback: function(e) {
          $mapster.mapster('setPano', '#pip-pano', {
            position: {
              lat: e.latLng.lat(),
              lng: e.latLng.lng()
            }
          });
        }
      }
    ]
  });

  // HTML5 Geolocation
  $mapster.mapster('getCurrentPosition', function(position) {
    $mapster.mapster('addMarker', {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    $mapster.mapster('setLocation', {
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
    $mapster.mapster('setPano', '#pip-pano', {
      position: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    });
  });
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     $mapster.mapster('addMarker', {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     });
  //     $mapster.mapster('setLocation', {
  //       center: {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       }
  //     });
  //     $mapster.mapster('setPano', '#pip-pano', {
  //       position: {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       }
  //     });
  //   });
  // }

})(window, jQuery);