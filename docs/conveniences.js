function resizeIFrameToFitContent(iFrame) {

    iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

// window.addEventListener('DOMContentLoaded', function (e) {

//     var iFrame = document.getElementById('google-map');
//     resizeIFrameToFitContent(iFrame);

//     // or, to resize all iframes:
//     var iframes = document.querySelectorAll("iframe");
//     for (var i = 0; i < iframes.length; i++) {
//         resizeIFrameToFitContent(iframes[i]);
//     }
// });

var firebaseConfig = {
	apiKey: "AIzaSyD-e_P1cNEw6FQCOtKE6hm4i1plJb3KV9Y",
	authDomain: "cs374-hospitus-database.firebaseapp.com",
	databaseURL: "https://cs374-hospitus-database.firebaseio.com",
	projectId: "cs374-hospitus-database",
	storageBucket: "cs374-hospitus-database.appspot.com",
	messagingSenderId: "31232394715",
	appId: "1:31232394715:web:a75465196a07c122"
	};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return(false);
}

var hk = getQueryVariable("hospital-key");
console.log(hk);
var hs = db.ref('/Hospitals');
var hsgrid;
hs.once('value', function(snapshot) {
    hsgrid = snapshot.child(hk).child("Grid").val();
    console.log("HSGRID: " + hsgrid);
    initMap();
});
var lat, lng;

function initMap() {
    var latlng = hsgrid.split(', ');
    let lat = parseFloat(latlng[0]);
    let lng = parseFloat(latlng[1]);
    console.table(latlng);
    var myLatLng = new google.maps.LatLng({lat: lat, lng: lng});
    var mapOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: 'roadmap',
    };
    
    map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });
}
function restaurantMap() {
    var latlng = hsgrid.split(', ');
    lat = parseFloat(latlng[0]);
    lng = parseFloat(latlng[1]);
    console.table(latlng);
    var myLatLng = new google.maps.LatLng({lat: lat, lng: lng});
	//36.362588,127.417769
	console.log("myLatLng: " + myLatLng);
	var mapOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: 'roadmap',
    };
	map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });
    setRestaurants(map);
    var infoWindow = new google.maps.InfoWindow({
        content: 'Restaurants loaded',
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
}

function setRestaurants() { 
    var markers = [
        ['Restaurant1', lat+0.005, lng+0.002, 1],
        ['Restaurant2', lat+0.002, lng-0.004, 2],
        ['Restaurant3', lat-0.003, lng+0.003, 3],
        ['Restaurant4', lat+0.001, lng-0.003, 4],
        ['Restaurant5', lat-0.005, lng+0.001, 5]
    ];
    console.table(markers);
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        // url: 'https://image.flaticon.com/icons/png/128/90/90556.png',
        size: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < markers.length; i++) {
        var mark = markers[i];
        var marker = new google.maps.Marker({
          position: {lat: mark[1], lng: mark[2]},
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP,
          shape: shape,
          title: mark[0],
          zIndex: mark[3]
        });
      }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(
		browserHasGeolocation
			? 'Error: The Geolocation service failed.'
			: "Error: Your browser doesn't support geolocation."
	);
	infoWindow.open(map);
}
function transMap() {
    var latlng = hsgrid.split(', ');
    lat = parseFloat(latlng[0]);
    lng = parseFloat(latlng[1]);
    console.table(latlng);
    var myLatLng = new google.maps.LatLng({lat: lat, lng: lng});
	//36.362588,127.417769
	console.log("myLatLng: " + myLatLng);
	var mapOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: 'roadmap',
    };
	map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });
    setTrans(map);
    var infoWindow = new google.maps.InfoWindow({
        content: 'Restaurants loaded',
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
}

function setTrans() { 
    var markers = [
        ['Restaurant1', lat+0.002, lng+0.005, 1],
        ['Restaurant2', lat+0.004, lng-0.002, 2],
        ['Restaurant3', lat+0.003, lng-0.003, 3],
        ['Restaurant4', lat+0.003, lng-0.001, 4],
        ['Restaurant5', lat-0.001, lng+0.005, 5]
    ];
    console.table(markers);
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        // url: 'https://image.flaticon.com/icons/png/128/90/90556.png',
        size: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < markers.length; i++) {
        var mark = markers[i];
        var marker = new google.maps.Marker({
          position: {lat: mark[1], lng: mark[2]},
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP,
          shape: shape,
          title: mark[0],
          zIndex: mark[3]
        });
      }
}
function storeMap() {
    var latlng = hsgrid.split(', ');
    lat = parseFloat(latlng[0]);
    lng = parseFloat(latlng[1]);
    console.table(latlng);
    var myLatLng = new google.maps.LatLng({lat: lat, lng: lng});
	//36.362588,127.417769
	console.log("myLatLng: " + myLatLng);
	var mapOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: 'roadmap',
    };
	map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });
    setStores(map);
    var infoWindow = new google.maps.InfoWindow({
        content: 'Restaurants loaded',
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
}

function setStores() { 
    var markers = [
        ['Store1', lat-0.005, lng-0.002, 1],
        ['Store2', lat+0.002, lng+0.004, 2],
        ['Store3', lat+0.003, lng-0.003, 3],
        ['Store4', lat-0.001, lng+0.003, 4],
        ['Store5', lat+0.005, lng-0.001, 5]
    ];
    console.table(markers);
    var image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        // url: 'https://image.flaticon.com/icons/png/128/90/90556.png',
        size: new google.maps.Size(30, 30),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < markers.length; i++) {
        var mark = markers[i];
        var marker = new google.maps.Marker({
          position: {lat: mark[1], lng: mark[2]},
          map: map,
          icon: image,
          animation: google.maps.Animation.DROP,
          shape: shape,
          title: mark[0],
          zIndex: mark[3]
        });
      }
}
