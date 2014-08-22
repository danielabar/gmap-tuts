(function(window, google, List) {

  // Mapster module
  var Mapster = (function() {

    // construction function
    function Mapster(element, opts) {
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
      this.markerClusterer = new MarkerClusterer(this.gMap, []);
      // if (opts.cluster) {
      //   console.log('cluster is true');
      //   // this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.clusterer);
      //   this.markerClusterer = new MarkerClusterer(this.gMap, []);
      // }
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
      _on: function(opts) {
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e) {
          opts.callback.call(self, e);
        });
      },
      _onOriginal: function(event, callback) {
        var self = this;
        google.maps.event.addListener(this.gMap, event, function(e) {
          callback.call(self, e);
        });
      },
      addMarker: function(opts) {
        var marker;
        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        };
        marker = this._createMarker(opts);
        // if (opts.cluster) {
        //   this.markerClusterer.addMarker(marker);
        // }
        this.markerClusterer.addMarker(marker);
        this.markers.add(marker);
        if (opts.event) {
          this._on({
            obj: marker,
            event: opts.event.name,
            callback: opts.event.callback
          });
        }
        if (opts.content) {
          this._on({
            obj: marker,
            event: 'click',
            callback: function() {
              var infoWindow = new google.maps.InfoWindow({
                content: opts.content
              });
              infoWindow.open(this.gMap, marker);
            }
          });
        }
        return marker;
      },
      findBy: function(callback) {
        return this.markers.find(callback);
      },
      removeBy: function(callback) {
        this.markers.find(callback, function(markers) {
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
        });
      },
      _createMarker: function(opts) {
        opts.map = this.gMap;
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

})(window, google, List);