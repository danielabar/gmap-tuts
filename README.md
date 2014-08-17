# Custom Interactive Maps With the Google Maps API

> Learning Google Maps API with TutsPlus course [Custom Interactive Maps With the Google Maps API](https://courses.tutsplus.com/courses/custom-interactive-maps-with-the-google-maps-api)

[Google Maps API Docs](https://developers.google.com/maps/documentation/javascript/tutorial)

## Setting Up a Key

Make sure you're signed in to your Google account.

Navigate to [https://console.developers.google.com/project](https://console.developers.google.com/project)

From Project Dashboard

* Click 'Enable an API'
* Scroll through the list until "Google Maps JavaScript API v3'
* Click the 'OFF' button to enable it
* Scroll to the top of the list to confirm its now turned ON
* Click on the link 'Google Maps JavaScript API v3'
* Click 'Credentials' from left nav bar
* Click 'Create new Key'
* Then from popup, click 'Browser key'
* Then click 'Create'

## Hello Map

_Order of element and script loading is VERY IMPORTANT!_

First in the html, define a div to contain the map

  ```html
  <div id="map-canvas"></div>
  ```

Then reference the google map api javascript

  ```javascript
  <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
  ```

Then reference the script with custom code to define and load a custom map

  ```javascript
  <script src="scripts/main.js"></script>
  ```

## Map Options

[Examples](app/scripts/map-options.js)

## Map Events

For example, register handler for `dragend` event

  ```
  var element = document.getElementById('map-canvas');
  var gMap = new google.maps.Map(element);
  google.maps.event.addListener(gMap, 'dragend', function(e) {
    // do something
  });
  ```

## Map Markers

Must provide a position, and a map to display on. Can also customize the icon by specifying a url to the icon image.

Custom map icons can be found [here](http://mapicons.nicolasmollet.com/)

Draggable option can be true or false.

  ```
  var element = document.getElementById('map-canvas');
  var gMap = new google.maps.Map(element);
  var marker = new google.maps.Marker({
    position: {
        lat: lat,
        lng: lng
      },
      draggable: draggable,
      map: gMap
      icon: '/path/to/custom/icon',
      visible: true
    }
  });

Map markers can also have custom options.

## Marker Events

Marker events are created in the same way as map events, except attached to the marker object rather than the map object.