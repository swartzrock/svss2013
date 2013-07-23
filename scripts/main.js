

// Configure Google Maps

function initialize() {
  
  var intel = new google.maps.LatLng(37.384672, -121.96383);

  var mapOptions = { 
    scrollwheel: false, 
    zoom: 12, 
    center: intel, 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map_canvas = document.getElementById('map_canvas');

  var map = new google.maps.Map( map_canvas, mapOptions );

  var marker = new google.maps.Marker({
      position: intel, map: map, title: 'Intel, 2191 Laurelwood, Santa Clara, CA'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function () {
  var tooltipSettings = {animation: false, placement: 'bottom' };
  $('.scheduleContents td a').tooltip( tooltipSettings );

  var noclick = function(e) { e.preventDefault(); }
  $('.scheduleContents td a.SessionSummary').click(noclick);
  $('.scheduleContents td a.SpeakerBio').click(noclick);
});




