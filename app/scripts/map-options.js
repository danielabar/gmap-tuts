(function(window, google, mapster) {

  mapster.CUSTOM_STYLES = [{
      featureType: 'all',
      elementType: 'labels',
      stylers: [{ visibility: 'off' } ]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#3498db' } ]
    }, {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ color: '#27ae60' } ]
    }, {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ color: '#27ae60' } ]
    }, {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#27ae60' } ]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#34495e' } ]
    }, {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{ color: '#ecf0f1' } ]
    } ];

  mapster.DEFAULT_OPTIONS = {
    zoom: 10,
    minZoom: null,
    maxZoom: null,
    disableDefaultUI: false,
    scrollWheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: {
      lat: 37.791350,
      lng: -122.435883
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    // These options are not taking effect
    cluster: {
      options: {
        styles: [{
          url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m4.png',
          height: 56,
          width: 55,
          textColor: '#F00',
          textSize: 18
        }]
      }
    },
    geocoder: true
  };

  mapster.DISABLE_DEFAULT_UI = {
    disableDefaultUI: true
  };

  mapster.DISABLE_SCROLL_ZOOM = {
    scrollwheel: false
  };

  mapster.DISABLE_DRAG = {
    draggable: false
  };

  mapster.MAP_TYPE_HYBRID = {
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  mapster.MAP_TYPE_SATELLITE = {
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  mapster.MIN_MAX_ZOOM = {
    minZoom: 9,
    maxZoom: 11
  };

  mapster.CONTROL_BOTTOM_LEFT_SMALL = {
    zoomControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT,
      style: google.maps.ZoomControlStyle.SMALL
    }
  };

  mapster.PAN_CONTROL_BOTTOM_LEFT = {
    panControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  };

})(window, google, window.Mapster || (window.Mapster = {}));