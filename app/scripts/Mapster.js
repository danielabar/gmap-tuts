(function(window, google) {

  // Mapster module
  var Mapster = (function() {

    // construction function
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
    }

    // Any functions that should be attached to all instances of the object are defined on the prototype
    Mapster.prototype = {
      setOpts: function(opts) {
        if (opts) {
          this.gMap.setOptions(opts);
        }
      },
      zoom: function(level) {
        if (level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      },
      // My attempt at click handler
      registerHandler: function(callback) {
        google.maps.event.addListener(this.gMap, 'click', function(e) {
          callback({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          });
        });
      },
      // Course solution for event handling
      // By convention, underscore means private
      _on: function(event, callback) {
        var self = this;
        google.maps.event.addListener(this.gMap, event, function(e) {
          callback.call(self, e);
        });
      },
      addMarker: function(lat, lng, draggable, icon) {
        this._createMarker(lat, lng, draggable, icon);
      },
      _createMarker: function(lat, lng, draggable, icon) {
        var opts = {
          position: {
            lat: lat,
            lng: lng
          },
          draggable: draggable,
          map: this.gMap
        };
        if (icon) {
          opts.icon = icon;
        }
        return new google.maps.Marker(opts);
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