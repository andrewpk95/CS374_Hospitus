
$(document).ready(function () {
    var hk = "-Le_qNjULv02Sl7YPp1V";
    var hs = firebase.database().ref("/Hospitals");
    var hr = firebase.database().ref("/Rooms")
    hs.once('value', function (snapshot) {
        var hname = snapshot.child(hk).child("Name").val();
        document.getElementById("hospital_name").innerHTML = hname;
    })
    hs.once('value', function (snapshot) {
        var haddress = snapshot.child(hk).child("Address").val();
        document.getElementById("address").innerHTML = haddress;
    })
    hs.once('value', function (snapshot) {
        var haddress = snapshot.child(hk).child("Address").val();
        document.getElementById("address").innerHTML = haddress;
    })
    hs.once('value', function (snapshot) {
        var hequipment = snapshot.child(hk).child("Equipments").val();
        document.getElementById("equipment").innerHTML = hequipment;
    })
    hs.once('value', function (snapshot) {
        var hfacilities = snapshot.child(hk).child("Facilities").val();
        document.getElementById("facilities").innerHTML = hfacilities;
    })
    hs.once('value', function (snapshot) {
        var hspecialty = snapshot.child(hk).child("Specialty").val();
        document.getElementById("specialty").innerHTML = hspecialty;
    })
    hr.once('value', function (snapshot) {
        var havailable = snapshot.child(hk).child("Available").val();
        var htotal = snapshot.child(hk).child("Total").val();
        var haccomodation = havailable + "/" + htotal;
        document.getElementById("accomodation").innerHTML = haccomodation;
    })

});
