$( document ).ready(function() {
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
  */
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
  /*
  firebase.database().ref("Hospitals").push(hospital).then(function (snapshot) {
    firebase.database().ref("Rooms").child(snapshot.key).set(room);
    firebase.database().ref("Reviews").child(snapshot.key).push(reviews);
  });
  */
});
