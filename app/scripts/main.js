(function(window, google, $) {

  var element = document.getElementById('map-canvas');
  var map;
  var defaultOptions = {
    center: {
      lat: 37.791350,
      lng: -122.435883
    },
    zoom: 10
  };

  var renderMap = function(options) {
    map = new google.maps.Map(element, options);
  };

  var registerHandlers = function() {
    $('#setDefaultOptions').on('click', function(e) {
      renderMap(defaultOptions);
      e.preventDefault();
    });
    $('#removeUIControls').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {disableDefaultUI: true});
      renderMap(options);
      e.preventDefault();
    });
    $('#disableScrollZoom').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {scrollwheel: false});
      renderMap(options);
      e.preventDefault();
    });
    $('#disableDrag').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {draggable: false});
      renderMap(options);
      e.preventDefault();
    });
    $('#mapTypeHybrid').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {mapTypeId: google.maps.MapTypeId.HYBRID});
      renderMap(options);
      e.preventDefault();
    });
    $('#mapTypeSatellite').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {mapTypeId: google.maps.MapTypeId.SATELLITE});
      renderMap(options);
      e.preventDefault();
    });
    $('#minMaxZoom').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {minZoom: 9, maxZoom: 11});
      renderMap(options);
      e.preventDefault();
    });
    $('#controlBottomLeftSmall').on('click', function(e) {
      var options = $.extend({}, defaultOptions,
        {zoomControlOptions:
          {position: google.maps.ControlPosition.BOTTOM_LEFT,
            style: google.maps.ZoomControlStyle.SMALL
          }
        });
      renderMap(options);
      e.preventDefault();
    });
    $('#panControlBottomLeft').on('click', function(e) {
      var options = $.extend({}, defaultOptions, {panControlOptions: {position: google.maps.ControlPosition.BOTTOM_LEFT}});
      renderMap(options);
      e.preventDefault();
    });
  };

  var init = function() {
    registerHandlers();
    renderMap(defaultOptions);
  };

  init();

}(window, google, jQuery));