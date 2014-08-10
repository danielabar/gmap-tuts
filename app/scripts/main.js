(function(window, google) {

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
  };

  var init = function() {
    registerHandlers();
    renderMap(defaultOptions);
  };

  init();

}(window, google));