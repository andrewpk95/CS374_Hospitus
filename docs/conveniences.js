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
hs.once('value', function (snapshot) {
    hsgrid = snapshot.child(hk).child("Grid").val();
    hsgrid = hsgrid.replace(/\s/g,'');
    console.log(hsgrid);
    var baseURL = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDx6E2nPO3IM9vr93xKFW3XjEHuRyBwyPM&q=stores';
    var gmap = document.getElementById('google-map');
    var mapURL = baseURL + '&center=' + hsgrid;
    gmap.setAttribute('src', mapURL);
});

