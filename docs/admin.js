$( document ).ready(function() {
  // Booking Page javascript code
  var hospitalKey = "-Le_qNjULv02Sl7YPp1V";
  firebase.database().ref("Rooms").child(hospitalKey).child("Types").once("value", function (snapshot) {
    snapshot.forEach(function (child) {
      $("#room").append("<option>" + child.key + "</option>");
    });
  });
  dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Book a Room": bookRoom,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[0].reset();
    }
  });
  form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    bookRoom();
  });
  $( "#create-user" ).button().on( "click", function() {
    dialog.dialog( "open" );
  });
  // Booking Page javascript code

  /*
  var hospital = {
    Name: "Maeil Hospital",
    Address: "34 Dunsan, Daejeon",
    Equipments: {
      1: "X-Ray",
      2: "MRI"
    },
    Facilities: {
      1: "None"
    },
    Specialty: "Leg",
    Rating: {
      Overall: 2.5,
      Service: 1.7,
      Food: 2.5,
      Hygiene: 3.8,
      Location: 1.0
    }
  };
  var room = {
    Available: 0,
    Total: 120,
    Types: {
      Groups: {
        Available: 0,
        Total: 120,
      }
    }
  };
  
  var hospitalKey = "-Le_xKHpMMihSWMMsRyg";
  var reviews = {
    Comment: "Never coming back here. ",
    Rating: {
      Overall: 1.0,
      Service: 1.0,
      Food: 1.0,
      Hygiene: 1.0,
      Location: 1.0
    }
  };
  firebase.database().ref("Reviews").child(hospitalKey).push(reviews);
  
  firebase.database().ref("Hospitals").push(hospital).then(function (snapshot) {
    firebase.database().ref("Rooms").child(snapshot.key).set(room);
    firebase.database().ref("Reviews").child(snapshot.key).push(reviews);
  });
  */
});

// Booking Page javascript code
function bookRoom() {
  var name = $( "#name" ).val();
  var email = $( "#email" ).val();
  var phoneNumber = $( "#phone-number" ).val();
  var roomType = $("#room option:selected").val();
  alert("Booking Complete!\n" + "Name: " + name + "\nEmail: " + email + "\nPhone Number: " + phoneNumber + "\nRoom Type: " + roomType);
  dialog.dialog( "close" );
}
// Booking Page javascript code