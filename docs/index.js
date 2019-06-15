
var injuries = [
	"Back Injury",
	"Leg Injury",
	"Arm Injury",
	"Head Injury"
]

// Get User's permission to access user's location
if ("geolocation" in navigator) {
  console.log("Accessing user location...");
  navigator.geolocation.getCurrentPosition(function (position) {
    save_location(position.coords.latitude, position.coords.longitude);
  });
} 
else {
  console.log("Cannot access user location!");
}

$( document ).ready(function() {
  $('#injury_input').autocomplete({
    source: injuries,
    minLength: 1,
    select: function(event, ui) {
      var input = ui.item.value;
      submit_injury(input);
        return false;
    },
    _resizeMenu: function() {
      this.menu.element.outerWidth(200);
    }
  });
  $(".injury").click(function() {
    submit_injury($(this).attr('id'));
  })
  $("#all_hospitals").click(function() {
    submit_injury("All");
  })
});

function submit_injury(input) {
  var url = "searchPage.html?injury=" + input + "%20Injury";
  if (latitude && longtitude) {
    url += "&latitude=" + latitude + "&longtitude=" + longtitude;
  }
	window.location.href = url;
}

function save_location(x, y) {
  latitude = x;
  longtitude = y;
  console.log(latitude, longtitude);
  $("#location").text("Your Location: " + latitude + ", " + longtitude);
}