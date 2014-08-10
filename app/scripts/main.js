(function(window, google, $, mapster) {

  var element = document.getElementById('map-canvas');
  var map;
  var INITIAL_ZOOM = 18;

  var init = function() {
    createMap(mapster.DEFAULT_OPTIONS);
    registerHandlers();
  };

  var createMap = function(options) {
    map = mapster.create(element, options);
    map.zoom(INITIAL_ZOOM);
    updateInfo(map);
  };

  var registerHandlers = function() {
    $('#setDefaultOptions').on('click', reset);
    $('#removeUIControls').on('click', changeMapOptions.bind(mapster.DISABLE_DEFAULT_UI));
    $('#disableScrollZoom').on('click', changeMapOptions.bind(mapster.DISABLE_SCROLL_ZOOM));
    $('#disableDrag').on('click', changeMapOptions.bind(mapster.DISABLE_DRAG));
    $('#mapTypeHybrid').on('click', changeMapOptions.bind(mapster.MAP_TYPE_HYBRID));
    $('#mapTypeSatellite').on('click', changeMapOptions.bind(mapster.MAP_TYPE_SATELLITE));
    $('#minMaxZoom').on('click', changeMapOptions.bind(mapster.MIN_MAX_ZOOM));
    $('#controlBottomLeftSmall').on('click', changeMapOptions.bind(mapster.CONTROL_BOTTOM_LEFT_SMALL));
    $('#panControlBottomLeft').on('click', changeMapOptions.bind(mapster.PAN_CONTROL_BOTTOM_LEFT));
  };

  var reset = function(e) {
    createMap(mapster.DEFAULT_OPTIONS);
    e.preventDefault();
  };

  var changeMapOptions = function(e) {
    var options = $.extend({}, mapster.DEFAULT_OPTIONS, this);
    map.gMap.setOptions(options);
    updateInfo(map);
    e.preventDefault();
  };

  var updateInfo = function(map) {
    $('#zoomValue').text(map.zoom());
  };

  init();

}(window, google, jQuery, window.Mapster || (window.Mapster = {})));