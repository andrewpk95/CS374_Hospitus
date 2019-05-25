// Saves global latitude and longtitude value if parameter exists in the URL. 
var latitude, longtitude; // Use this global variable to get user's geolocation!!!
var parameters = getURLParameters();
if (!parameters.latitude && !parameters.longtitude) {
  latitude = parameters.latitude;
  longtitude = parameters.longtitude;
}

// Given two coordinates, returns Distance in km. 
// To calculate the distance between user and a hospital in km, do:
//    var d = distance(latitude, longtitude, hospital_latitude, hospital_longtitude)
function distance(x1, y1, x2, y2) {
  var R = 6371;
  var dLat = (y2 - y1).toRad();
  var dLon = (x2 - x1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(y1.toRad()) * Math.cos(y2.toRad()) * Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
// Converts numeric degrees to radians
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

// Returns an object with all the parameters from the url
// For example, if url is "...html?injury=Back%20Injury&latitude=32.5"
// it returns an object {injury: "Back%20Injury", latitude: 32.5}
// To access the parameters, simply do:
//    var parameters = getURLParameters();
//    var latitude = parameters.latitude;
function getURLParameters() {
	var queryString = window.location.search.slice(1);
	var obj = {};
  if (queryString) {
    var arr = queryString.split('&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
			if (!obj[paramName]) {
				obj[paramName] = paramValue;
			} else if (obj[paramName] && typeof obj[paramName] === 'string'){
				obj[paramName] = [obj[paramName]];
				obj[paramName].push(paramValue);
			} else {
				obj[paramName].push(paramValue);
			}
    }
  }
  return obj;
}