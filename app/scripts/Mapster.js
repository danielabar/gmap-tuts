(function(window, google) {

  // Mapster module
  var Mapster = (function() {

    // construction function
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
    }

    // Any functions that should be attached to all instances of the object are defined on the prototype
    Mapster.prototype = {
      zoom: function(level) {
        if (level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      }
    };

    return Mapster;
  })();

  // Factory function
  Mapster.create = function(element, opts) {
    return new Mapster(element, opts);
  };

  // Expose Mapster as global on window
  window.Mapster = Mapster;

})(window, google);