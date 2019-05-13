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
function initMap() {
    var latlng = hsgrid.split(', ');
    var lat = parseFloat(latlng[0]);
    var lng = parseFloat(latlng[1]);
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
    infoWindow = new google.maps.InfoWindow();
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

