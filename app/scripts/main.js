(function(window, $, mapster) {

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
    map.registerHandler(displayLatLong);
    map._onOriginal('dragend', function(e) {
      console.log('dragend');
      console.dir(e);
      console.dir(this);
    });
    updateInfo(map);
    addMarkers();
  };

  var addMarkers = function() {
    map.addMarker({
      lat: 37.7916,
      lng: -122.4357,
      content: '<div class="info-window">nice restaurant here</div>'
    });
    var marker = map.addMarker({
      lat: 37.791350,
      lng: -122.435883,
      draggable: true,
      icon: 'images/giraffe.png',
      id: 'giraffe-1',
      content: '<div class="info-window">Awesome zoo here</div>'
    });
    console.log(map.markers);
  };

  var displayLatLong = function(latLng) {
    $('#latValue').text(roundValue(latLng.lat));
    $('#lngValue').text(roundValue(latLng.lng));
  };

  var roundValue = function(val) {
    return Math.round(val * 10000) / 10000;
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
    map.setOpts(options);
    updateInfo(map);
    e.preventDefault();
  };

  var updateInfo = function(map) {
    $('#zoomValue').text(map.zoom());
  };

  init();

}(window, jQuery, window.Mapster || (window.Mapster = {})));