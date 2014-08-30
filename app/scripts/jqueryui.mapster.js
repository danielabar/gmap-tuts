(function(window, mapster) {

  $.widget('mapster.mapster', {

    //default options
    options: { },

    // constructor
    _create: function() {
      var element = this.element[0];
      var options = this.options;
      this.map = Mapster.create(element, options);
    },

    // called when created, and later when changing options
    _refresh: function() {

    },

    // Add a marker onto the map by lat and lng
    addMarker: function(opts) {
      return this.map.addMarker(opts);
    },

    // Add marker onto the map by geocode
    addMarkerGeo: function(opts) {
      var self = this;
      this.map.geocode({
        address: opts.location,
        success: function(results) {
          results.forEach(function(result) {
            opts.lat = result.geometry.location.lat();
            opts.lng = result.geometry.location.lng();
            /*jshint camelcase: false */
            opts.content = result.formatted_address;
            self.map.addMarker(opts);
            // if (opts.panoSelector) {
            //   self.setPano(opts.panoSelector, {
            //     position: {
            //       lat: opts.lat,
            //       lng: opts.lng
            //     }
            //   });
            // }
          });
        },
        error: function(status) {

        }
      });
    },

    findMarkers: function(callback) {
      this.map.findBy(callback);
    },

    removeMarkers: function(callback) {
      this.map.removeBy(callback);
    },

    markers: function() {
      return this.map.markers.items;
    },

    setPano: function(selector, opts) {
      var self = this;
      var elements = $(selector);
      $.each(elements, function(key, element) {
        self.map.setPano(element, opts);
      });
    },

    // events bound via _on are removed automatically, revert other modifications here
    _destroy: function() {

    },

    // _setOptions is called with a hash of all options that are changing, always refresh when changing options
    _setOptions: function() {
      // _super and _superApply handle keeping the right this-context
      this._superApply( arguments );
      this._refresh();
    },

    // _setOption is called for each individual option that is changing
    _setOption: function( key, value ) {
      this._super( key, value );
    }

  });

})(window, window.Mapster || (window.Mapster = {}));