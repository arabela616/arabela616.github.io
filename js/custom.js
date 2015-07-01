/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
/* google maps */

// enable the visual refresh
google.maps.visualRefresh = false;

var map;
//function initialize() {
  var pos = new google.maps.LatLng(45.070008, 7.653961);
  
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  var infowindow = new google.maps.InfoWindow({
    map: map,
    position: pos,
    content: 'Boutique Bella, via Dante di Nanni 11 (TO)'
  });
  
  map.setCenter(pos);
//}
