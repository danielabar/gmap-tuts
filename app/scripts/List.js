(function(window) {

  var List = (function() {

    // Constructor
    function List() {
      this.items = [];
    }

    // Prototype for constructor function
    List.prototype = {
      add: function(item) {
        this.items.push(item);
      },
      remove: function(item) {
        var indexOf = this.items.indexOf(item);
        if (indexOf !== -1) {
          this.items.splice(indexOf, 1);
        }
      },
      // Find by anything using callback
      find: function(callback, action) {
        var matches = [];
        for (var i = 0; i < this.items.length; i++) {
          var currentItem = this.items[i];
          var callbackReturn = callback(currentItem, i);
          if (callbackReturn) {
            matches.push(currentItem);
          }
        }
        if (action) {
          action.call(this, matches);
        }
        return matches;
      }
    };

    // Return constructor function itself. i.e. List variable holds constructor function,
    //  NOT the results of the constructor function
    return List;
  })();

  // Factory method
  List.create = function(params) {
    return new List(params);
  };

  // Expose module as global variable on window
  window.List = List;

})(window);