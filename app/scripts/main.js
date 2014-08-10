(function(window, google, $, mapster) {

  var element = document.getElementById('map-canvas');
  var map;

  var init = function() {
    registerHandlers();
    renderMap(mapster.DEFAULT_OPTIONS);
  };

  var registerHandlers = function() {
    $('#setDefaultOptions').on('click', changeMapOptions.bind(null));
    $('#removeUIControls').on('click', changeMapOptions.bind({disableDefaultUI: true}));
    $('#disableScrollZoom').on('click', changeMapOptions.bind({scrollwheel: false}));
    $('#disableDrag').on('click', changeMapOptions.bind({draggable: false}));
    $('#mapTypeHybrid').on('click', changeMapOptions.bind({mapTypeId: google.maps.MapTypeId.HYBRID}));
    $('#mapTypeSatellite').on('click', changeMapOptions.bind({mapTypeId: google.maps.MapTypeId.SATELLITE}));
    $('#minMaxZoom').on('click', changeMapOptions.bind({minZoom: 9, maxZoom: 11}));
    $('#controlBottomLeftSmall').on('click', changeMapOptions.bind({zoomControlOptions: {position: google.maps.ControlPosition.BOTTOM_LEFT, style: google.maps.ZoomControlStyle.SMALL } }));
    $('#panControlBottomLeft').on('click', changeMapOptions.bind({panControlOptions: {position: google.maps.ControlPosition.BOTTOM_LEFT} }));
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