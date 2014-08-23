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

    // Add a marker onto the map
    addMarker: function(opts) {
      return this.map.addMarker(opts);
    },

    findMarkers: function(callback) {
      this.map.findBy(callback);
    },

    removeMarkers: function(callback) {
      this.map.removeBy(callback);
    }

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