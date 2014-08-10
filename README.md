# Custom Interactive Maps With the Google Maps API

> Learning Google Maps API with TutsPlus course [Custom Interactive Maps With the Google Maps API](https://courses.tutsplus.com/courses/custom-interactive-maps-with-the-google-maps-api)

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