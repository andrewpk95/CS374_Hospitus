
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
        var hequipment = ""
        snapshot.child(hk).child("Equipments").forEach(function (ss1) {
            hequipment = hequipment + ss1.val() + ", "
        })
        hequipment = hequipment.substring(0, hequipment.length - 2);
        document.getElementById("equipment").innerHTML = hequipment;
    })
    hs.once('value', function (snapshot) {
        var hfacilities = ""
        snapshot.child(hk).child("Facilities").forEach(function (ss1) {
            hfacilities = hfacilities + ss1.val() + ", "
        })
        hfacilities = hfacilities.substring(0, hfacilities.length - 2)
        document.getElementById("facilities").innerHTML = hfacilities;
    })
    hs.once('value', function (snapshot) {
        var hdistance = snapshot.child(hk).child("Distance").val();
        document.getElementById("distance").innerHTML = hdistance;
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
    var room_list = [];
    hr.once('value', function (snapshot) {
        snapshot.child(hk).child("Types").forEach(function (ss1) {
            var temp_list = [];
            temp_list.push(ss1.key);
            temp_list.push(ss1.val());
            room_list.push(temp_list);
        })
        console.log(room_list)
        var hrooms = ""
        room_list.forEach(function (entry) {
            hrooms = hrooms + entry[0] + ": " + entry[1].Available + "/" + entry[1].Total + " available, "
        })
        hrooms = hrooms.substring(0, hrooms.length - 2);
        document.getElementById("rooms").innerHTML = hrooms;
    })
});
