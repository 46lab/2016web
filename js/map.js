// JavaScript Document

function initialize() {
  var latlng = new google.maps.LatLng(35.7096267,139.6693103);
  var myOptions = {
    zoom: 16,/* zoom */
    center: latlng, /* center position */
	scrollwheel: false, /* disable mouse scroll */
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] } /* MapType */
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  
  /* icon*/
  var icon = new google.maps.MarkerImage('image/map-icon_60x95.png',
    new google.maps.Size(60,95),/* Icon size */
    new google.maps.Point(0,0) /* Icon position */
    );
  var markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'フォーティシックスラボ　中野オフィス'
  };
  var marker = new google.maps.Marker(markerOptions);
　/* end icon */
 
  var styleOptions = [
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "saturation": -72 },
      { "hue": "#0008ff" },
      { "gamma": 1.04 }
    ]
  }
  ];  
  var styledMapOptions = { name: '46lab' };
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
google.maps.event.addDomListener(window, 'load', initialize);
