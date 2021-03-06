// Google Maps Api , Waterford

function initMap() {
  const myLatLng = {lat: 52.25833, lng: -7.11194};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });

 // Loko Marker
 var marker = new google.maps.Marker({                  
      position: {lat: 52.24718, lng: -7.08307},
      map: map,
      title: 'Here Is Loko!'
    });

 // 360 Cookhouse Marker
 var marker2 = new google.maps.Marker({
      position: {lat: 52.08911, lng: -7.61723},
      map: map,
      title: 'Here is 360 Cookhouse!'
    });

 // Dog House Marker
 var marker3 = new google.maps.Marker({
      position: {lat: 53.38897, lng: -6.07470},
      map: map,
      title: 'Here is The Dog House!'
    });
} 