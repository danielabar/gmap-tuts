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

  ```javascript
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

  ```javascript
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
  ```

Map markers can also have custom options.

## Marker Events

Marker events are created in the same way as map events, except attached to the marker object rather than the map object.

## Info Window

To define an info window, just need to provide some content

  ```javascript
  var infoWindow = new google.maps.InfoWindow({
    content: 'Hello this is some information'
  });
  ```

Then attach the marker to the map, and provide a marker to center its position

  ```javascript
  infoWindow.open(map.gMap, marker);
  ```

This will make the info window open by default.
If only want it to open when user clicks on the marker, need to setup an event on the marker.

Content strings for info window can also have html, so they can be styled. For example

  ```javascript
  var infoWindow = new google.maps.InfoWindow({
    content: '<div class="content">Hello this is some styled content</div>'
  });
  ```

  ```css
  .content {
    color: red;
  }

## Keeping Track of Markers

Googe Maps provides no native method for retrieving a collection of markers currently defined on the map,
therefore, developers must write their own mechanism for keeping track of markers.

To remove a marker from a map, set its map property to null

  ```javascript
  marker.setMap(null);
  ```

_A marker is assigned to a map, whereas a map is not assigned a marker._

## Advanced Marker Organization

Separate out marker organization logic from core map functions, _single responsibility prinicple_.

For this project, the [List](app/scripts/List.js) module is created to manage any collection, including map markers.

## Marker Clustering

Several markers in small area (especially as user zooms out) will overlap each ohter.
This can be fixed with clustering.

Clustering is not part of google maps by default, an extra library must be included.

Additional utility libraries available [here](https://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries)

[Map Clusterer](http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerclustererplus/)

Sample usage

  ```javascript
  // constructor takes a map and array of markers (could be empty)
  var mapClusterer = new MarkerClusterer(map, markers);
  var marker = ... // code to create a marker
  markerClusterer.addMarker(marker);
  ```

Cluster color can be modified to reflect density.

## Map Widget

Build a jQuery UI [Widget](http://jqueryui.com/widget/) to make working with map library easier.

[Code](app/scripts/jqueryui.mapster.js) | [Usage](app/scripts/main2.js)

## Street View Panorama

`pov` is point of view. Consists of `heading` to specify number of degrees to the right,
and `pitch` to specify number of degrees up (positive) or down (negative).

### Events

* position_changed
* pov_chnaged
* links_changed (fires whenever street is changed)

## Geocoding

Converting address to geographic co-ordinates (lat/lng).

Google geocoder function is asynchronous, therefore must provide callbacks for success and error handling.

## Custom Styles

[Docs](https://developers.google.com/maps/documentation/javascript/styling#style_syntax) | [Reference](https://developers.google.com/maps/documentation/javascript/reference)

Can change colors of components on map.

Define an array of objects, and set that as the map style.
