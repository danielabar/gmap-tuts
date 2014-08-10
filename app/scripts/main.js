(function(window, google, $, mapster) {

  var element = document.getElementById('map-canvas');
  var map;

  var init = function() {
    registerHandlers();
    renderMap(mapster.DEFAULT_OPTIONS);
  };

  var registerHandlers = function() {
    $('#setDefaultOptions').on('click', changeMapOptions.bind(null));
    $('#removeUIControls').on('click', changeMapOptions.bind(mapster.DISABLE_DEFAULT_UI));
    $('#disableScrollZoom').on('click', changeMapOptions.bind(mapster.DISABLE_SCROLL_ZOOM));
    $('#disableDrag').on('click', changeMapOptions.bind(mapster.DISABLE_DRAG));
    $('#mapTypeHybrid').on('click', changeMapOptions.bind(mapster.MAP_TYPE_HYBRID));
    $('#mapTypeSatellite').on('click', changeMapOptions.bind(mapster.MAP_TYPE_SATELLITE));
    $('#minMaxZoom').on('click', changeMapOptions.bind(mapster.MIN_MAX_ZOOM));
    $('#controlBottomLeftSmall').on('click', changeMapOptions.bind(mapster.CONTROL_BOTTOM_LEFT_SMALL));
    $('#panControlBottomLeft').on('click', changeMapOptions.bind(mapster.PAN_CONTROL_BOTTOM_LEFT));
  };

  var changeMapOptions = function(e) {
    var options = $.extend({}, mapster.DEFAULT_OPTIONS, this);
    renderMap(options);
    e.preventDefault();
  };

  var renderMap = function(options) {
    map = new google.maps.Map(element, options);
  };

  init();

}(window, google, jQuery, window.Mapster || (window.Mapster = {})));