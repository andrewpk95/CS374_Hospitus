
$(document).ready(function () {
    var hk = "-Le_qNjULv02Sl7YPp1V";
    var hs = firebase.database().ref("/Hospitals");
    var hr = firebase.database().ref("/Rooms");
    var hc = firebase.database().ref("/Reviews");
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
        var hrooms = ""
        room_list.forEach(function (entry) {
            hrooms = hrooms + entry[0] + ": " + entry[1].Available + "/" + entry[1].Total + " available, "
        })
        hrooms = hrooms.substring(0, hrooms.length - 2);
        document.getElementById("rooms").innerHTML = hrooms;
    })
    hs.child(hk).child("Rating").once('value', function (snapshot) {
        var ro = snapshot.child("Overall").val()
        var rh = snapshot.child("Hygiene").val()
        var rs = snapshot.child("Service").val()
        var rf = snapshot.child("Food").val()
        var rl = snapshot.child("Location").val()
        if (ro <= 5 && ro >= 4.5) {
            document.getElementById("o1").className = 'fa fa-star checked'
            document.getElementById("o2").className = 'fa fa-star checked'
            document.getElementById("o3").className = 'fa fa-star checked'
            document.getElementById("o4").className = 'fa fa-star checked'
            document.getElementById("o5").className = 'fa fa-star checked'
        }
        else if (ro < 4.5 && ro >= 3.5) {
            document.getElementById("o1").className = 'fa fa-star checked'
            document.getElementById("o2").className = 'fa fa-star checked'
            document.getElementById("o3").className = 'fa fa-star checked'
            document.getElementById("o4").className = 'fa fa-star checked'
            document.getElementById("o5").className = 'fa fa-star'
        }
        else if (ro < 3.5 && ro >= 2.5) {
            document.getElementById("o1").className = 'fa fa-star checked'
            document.getElementById("o2").className = 'fa fa-star checked'
            document.getElementById("o3").className = 'fa fa-star checked'
            document.getElementById("o4").className = 'fa fa-star'
            document.getElementById("o5").className = 'fa fa-star'
        }
        else if (ro < 2.5 && ro >= 1.5) {
            document.getElementById("o1").className = 'fa fa-star checked'
            document.getElementById("o2").className = 'fa fa-star checked'
            document.getElementById("o3").className = 'fa fa-star'
            document.getElementById("o4").className = 'fa fa-star'
            document.getElementById("o5").className = 'fa fa-star'
        }
        else if (ro < 1.5 && ro >= 0.5) {
            document.getElementById("o1").className = 'fa fa-star checked'
            document.getElementById("o2").className = 'fa fa-star'
            document.getElementById("o3").className = 'fa fa-star'
            document.getElementById("o4").className = 'fa fa-star'
            document.getElementById("o5").className = 'fa fa-star'
        }
        else {
            document.getElementById("o1").className = 'fa fa-star'
            document.getElementById("o2").className = 'fa fa-star'
            document.getElementById("o3").className = 'fa fa-star'
            document.getElementById("o4").className = 'fa fa-star'
            document.getElementById("o5").className = 'fa fa-star'
        }

        if (rh <= 5 && rh >= 4.5) {
            document.getElementById("h1").className = 'fa fa-star checked'
            document.getElementById("h2").className = 'fa fa-star checked'
            document.getElementById("h3").className = 'fa fa-star checked'
            document.getElementById("h4").className = 'fa fa-star checked'
            document.getElementById("h5").className = 'fa fa-star checked'
        }
        else if (rh < 4.5 && rh >= 3.5) {
            document.getElementById("h1").className = 'fa fa-star checked'
            document.getElementById("h2").className = 'fa fa-star checked'
            document.getElementById("h3").className = 'fa fa-star checked'
            document.getElementById("h4").className = 'fa fa-star checked'
            document.getElementById("h5").className = 'fa fa-star'
        }
        else if (rh < 3.5 && rh >= 2.5) {
            document.getElementById("h1").className = 'fa fa-star checked'
            document.getElementById("h2").className = 'fa fa-star checked'
            document.getElementById("h3").className = 'fa fa-star checked'
            document.getElementById("h4").className = 'fa fa-star'
            document.getElementById("h5").className = 'fa fa-star'
        }
        else if (rh < 2.5 && rh >= 1.5) {
            document.getElementById("h1").className = 'fa fa-star checked'
            document.getElementById("h2").className = 'fa fa-star checked'
            document.getElementById("h3").className = 'fa fa-star'
            document.getElementById("h4").className = 'fa fa-star'
            document.getElementById("h5").className = 'fa fa-star'
        }
        else if (rh < 1.5 && rh >= 0.5) {
            document.getElementById("h1").className = 'fa fa-star checked'
            document.getElementById("h2").className = 'fa fa-star'
            document.getElementById("h3").className = 'fa fa-star'
            document.getElementById("h4").className = 'fa fa-star'
            document.getElementById("h5").className = 'fa fa-star'
        }
        else {
            document.getElementById("h1").className = 'fa fa-star'
            document.getElementById("h2").className = 'fa fa-star'
            document.getElementById("h3").className = 'fa fa-star'
            document.getElementById("h4").className = 'fa fa-star'
            document.getElementById("h5").className = 'fa fa-star'
        }
        if (rs <= 5 && rs >= 4.5) {
            document.getElementById("s1").className = 'fa fa-star checked'
            document.getElementById("s2").className = 'fa fa-star checked'
            document.getElementById("s3").className = 'fa fa-star checked'
            document.getElementById("s4").className = 'fa fa-star checked'
            document.getElementById("s5").className = 'fa fa-star checked'
        }
        else if (rs < 4.5 && rs >= 3.5) {
            document.getElementById("s1").className = 'fa fa-star checked'
            document.getElementById("s2").className = 'fa fa-star checked'
            document.getElementById("s3").className = 'fa fa-star checked'
            document.getElementById("s4").className = 'fa fa-star checked'
            document.getElementById("s5").className = 'fa fa-star'
        }
        else if (rs < 3.5 && rs >= 2.5) {
            document.getElementById("s1").className = 'fa fa-star checked'
            document.getElementById("s2").className = 'fa fa-star checked'
            document.getElementById("s3").className = 'fa fa-star checked'
            document.getElementById("s4").className = 'fa fa-star'
            document.getElementById("s5").className = 'fa fa-star'
        }
        else if (rs < 2.5 && rs >= 1.5) {
            document.getElementById("s1").className = 'fa fa-star checked'
            document.getElementById("s2").className = 'fa fa-star checked'
            document.getElementById("s3").className = 'fa fa-star'
            document.getElementById("s4").className = 'fa fa-star'
            document.getElementById("s5").className = 'fa fa-star'
        }
        else if (rs < 1.5 && rs >= 0.5) {
            document.getElementById("s1").className = 'fa fa-star checked'
            document.getElementById("s2").className = 'fa fa-star'
            document.getElementById("s3").className = 'fa fa-star'
            document.getElementById("s4").className = 'fa fa-star'
            document.getElementById("s5").className = 'fa fa-star'
        }
        else {
            document.getElementById("s1").className = 'fa fa-star'
            document.getElementById("s2").className = 'fa fa-star'
            document.getElementById("s3").className = 'fa fa-star'
            document.getElementById("s4").className = 'fa fa-star'
            document.getElementById("s5").className = 'fa fa-star'
        }
        if (rf <= 5 && rf >= 4.5) {
            document.getElementById("f1").className = 'fa fa-star checked'
            document.getElementById("f2").className = 'fa fa-star checked'
            document.getElementById("f3").className = 'fa fa-star checked'
            document.getElementById("f4").className = 'fa fa-star checked'
            document.getElementById("f5").className = 'fa fa-star checked'
        }
        else if (rf < 4.5 && rf >= 3.5) {
            document.getElementById("f1").className = 'fa fa-star checked'
            document.getElementById("f2").className = 'fa fa-star checked'
            document.getElementById("f3").className = 'fa fa-star checked'
            document.getElementById("f4").className = 'fa fa-star checked'
            document.getElementById("f5").className = 'fa fa-star'
        }
        else if (rf < 3.5 && rf >= 2.5) {
            document.getElementById("f1").className = 'fa fa-star checked'
            document.getElementById("f2").className = 'fa fa-star checked'
            document.getElementById("f3").className = 'fa fa-star checked'
            document.getElementById("f4").className = 'fa fa-star'
            document.getElementById("f5").className = 'fa fa-star'
        }
        else if (rf < 2.5 && rf >= 1.5) {
            document.getElementById("f1").className = 'fa fa-star checked'
            document.getElementById("f2").className = 'fa fa-star checked'
            document.getElementById("f3").className = 'fa fa-star'
            document.getElementById("f4").className = 'fa fa-star'
            document.getElementById("f5").className = 'fa fa-star'
        }
        else if (rf < 1.5 && rf >= 0.5) {
            document.getElementById("f1").className = 'fa fa-star checked'
            document.getElementById("f2").className = 'fa fa-star'
            document.getElementById("f3").className = 'fa fa-star'
            document.getElementById("f4").className = 'fa fa-star'
            document.getElementById("f5").className = 'fa fa-star'
        }
        else {
            document.getElementById("f1").className = 'fa fa-star'
            document.getElementById("f2").className = 'fa fa-star'
            document.getElementById("f3").className = 'fa fa-star'
            document.getElementById("f4").className = 'fa fa-star'
            document.getElementById("f5").className = 'fa fa-star'
        }
        if (rl <= 5 && rl >= 4.5) {
            document.getElementById("l1").className = 'fa fa-star checked'
            document.getElementById("l2").className = 'fa fa-star checked'
            document.getElementById("l3").className = 'fa fa-star checked'
            document.getElementById("l4").className = 'fa fa-star checked'
            document.getElementById("l5").className = 'fa fa-star checked'
        }
        else if (rl < 4.5 && rl >= 3.5) {
            document.getElementById("l1").className = 'fa fa-star checked'
            document.getElementById("l2").className = 'fa fa-star checked'
            document.getElementById("l3").className = 'fa fa-star checked'
            document.getElementById("l4").className = 'fa fa-star checked'
            document.getElementById("l5").className = 'fa fa-star'
        }
        else if (rl < 3.5 && rl >= 2.5) {
            document.getElementById("l1").className = 'fa fa-star checked'
            document.getElementById("l2").className = 'fa fa-star checked'
            document.getElementById("l3").className = 'fa fa-star checked'
            document.getElementById("l4").className = 'fa fa-star'
            document.getElementById("l5").className = 'fa fa-star'
        }
        else if (rl < 2.5 && rl >= 1.5) {
            document.getElementById("l1").className = 'fa fa-star checked'
            document.getElementById("l2").className = 'fa fa-star checked'
            document.getElementById("l3").className = 'fa fa-star'
            document.getElementById("l4").className = 'fa fa-star'
            document.getElementById("l5").className = 'fa fa-star'
        }
        else if (rl < 1.5 && rl >= 0.5) {
            document.getElementById("l1").className = 'fa fa-star checked'
            document.getElementById("l2").className = 'fa fa-star'
            document.getElementById("l3").className = 'fa fa-star'
            document.getElementById("l4").className = 'fa fa-star'
            document.getElementById("l5").className = 'fa fa-star'
        }
        else {
            document.getElementById("l1").className = 'fa fa-star'
            document.getElementById("l2").className = 'fa fa-star'
            document.getElementById("l3").className = 'fa fa-star'
            document.getElementById("l4").className = 'fa fa-star'
            document.getElementById("l5").className = 'fa fa-star'
        }
    })

    document.getElementById("ro5").onclick = function () {
        document.getElementById("ro1").className = 'fa fa-star checked'
        document.getElementById("ro2").className = 'fa fa-star checked'
        document.getElementById("ro3").className = 'fa fa-star checked'
        document.getElementById("ro4").className = 'fa fa-star checked'
        document.getElementById("ro5").className = 'fa fa-star checked'
    }
    document.getElementById("ro4").onclick = function () {
        document.getElementById("ro1").className = 'fa fa-star checked'
        document.getElementById("ro2").className = 'fa fa-star checked'
        document.getElementById("ro3").className = 'fa fa-star checked'
        document.getElementById("ro4").className = 'fa fa-star checked'
        document.getElementById("ro5").className = 'fa fa-star'
    }
    document.getElementById("ro3").onclick = function () {
        document.getElementById("ro1").className = 'fa fa-star checked'
        document.getElementById("ro2").className = 'fa fa-star checked'
        document.getElementById("ro3").className = 'fa fa-star checked'
        document.getElementById("ro4").className = 'fa fa-star'
        document.getElementById("ro5").className = 'fa fa-star'
    }
    document.getElementById("ro2").onclick = function () {
        document.getElementById("ro1").className = 'fa fa-star checked'
        document.getElementById("ro2").className = 'fa fa-star checked'
        document.getElementById("ro3").className = 'fa fa-star'
        document.getElementById("ro4").className = 'fa fa-star'
        document.getElementById("ro5").className = 'fa fa-star'
    }
    document.getElementById("ro1").onclick = function () {
        document.getElementById("ro1").className = 'fa fa-star checked'
        document.getElementById("ro2").className = 'fa fa-star'
        document.getElementById("ro3").className = 'fa fa-star'
        document.getElementById("ro4").className = 'fa fa-star'
        document.getElementById("ro5").className = 'fa fa-star'
    }
    document.getElementById("rh5").onclick = function () {
        document.getElementById("rh1").className = 'fa fa-star checked'
        document.getElementById("rh2").className = 'fa fa-star checked'
        document.getElementById("rh3").className = 'fa fa-star checked'
        document.getElementById("rh4").className = 'fa fa-star checked'
        document.getElementById("rh5").className = 'fa fa-star checked'
    }
    document.getElementById("rh4").onclick = function () {
        document.getElementById("rh1").className = 'fa fa-star checked'
        document.getElementById("rh2").className = 'fa fa-star checked'
        document.getElementById("rh3").className = 'fa fa-star checked'
        document.getElementById("rh4").className = 'fa fa-star checked'
        document.getElementById("rh5").className = 'fa fa-star'
    }
    document.getElementById("rh3").onclick = function () {
        document.getElementById("rh1").className = 'fa fa-star checked'
        document.getElementById("rh2").className = 'fa fa-star checked'
        document.getElementById("rh3").className = 'fa fa-star checked'
        document.getElementById("rh4").className = 'fa fa-star'
        document.getElementById("rh5").className = 'fa fa-star'
    }
    document.getElementById("rh2").onclick = function () {
        document.getElementById("rh1").className = 'fa fa-star checked'
        document.getElementById("rh2").className = 'fa fa-star checked'
        document.getElementById("rh3").className = 'fa fa-star'
        document.getElementById("rh4").className = 'fa fa-star'
        document.getElementById("rh5").className = 'fa fa-star'
    }
    document.getElementById("rh1").onclick = function () {
        document.getElementById("rh1").className = 'fa fa-star checked'
        document.getElementById("rh2").className = 'fa fa-star'
        document.getElementById("rh3").className = 'fa fa-star'
        document.getElementById("rh4").className = 'fa fa-star'
        document.getElementById("rh5").className = 'fa fa-star'
    }
    document.getElementById("rs5").onclick = function () {
        document.getElementById("rs1").className = 'fa fa-star checked'
        document.getElementById("rs2").className = 'fa fa-star checked'
        document.getElementById("rs3").className = 'fa fa-star checked'
        document.getElementById("rs4").className = 'fa fa-star checked'
        document.getElementById("rs5").className = 'fa fa-star checked'
    }
    document.getElementById("rs4").onclick = function () {
        document.getElementById("rs1").className = 'fa fa-star checked'
        document.getElementById("rs2").className = 'fa fa-star checked'
        document.getElementById("rs3").className = 'fa fa-star checked'
        document.getElementById("rs4").className = 'fa fa-star checked'
        document.getElementById("rs5").className = 'fa fa-star'
    }
    document.getElementById("rs3").onclick = function () {
        document.getElementById("rs1").className = 'fa fa-star checked'
        document.getElementById("rs2").className = 'fa fa-star checked'
        document.getElementById("rs3").className = 'fa fa-star checked'
        document.getElementById("rs4").className = 'fa fa-star'
        document.getElementById("rs5").className = 'fa fa-star'
    }
    document.getElementById("rs2").onclick = function () {
        document.getElementById("rs1").className = 'fa fa-star checked'
        document.getElementById("rs2").className = 'fa fa-star checked'
        document.getElementById("rs3").className = 'fa fa-star'
        document.getElementById("rs4").className = 'fa fa-star'
        document.getElementById("rs5").className = 'fa fa-star'
    }
    document.getElementById("rs1").onclick = function () {
        document.getElementById("rs1").className = 'fa fa-star checked'
        document.getElementById("rs2").className = 'fa fa-star'
        document.getElementById("rs3").className = 'fa fa-star'
        document.getElementById("rs4").className = 'fa fa-star'
        document.getElementById("rs5").className = 'fa fa-star'
    }
    document.getElementById("rf5").onclick = function () {
        document.getElementById("rf1").className = 'fa fa-star checked'
        document.getElementById("rf2").className = 'fa fa-star checked'
        document.getElementById("rf3").className = 'fa fa-star checked'
        document.getElementById("rf4").className = 'fa fa-star checked'
        document.getElementById("rf5").className = 'fa fa-star checked'
    }
    document.getElementById("rf4").onclick = function () {
        document.getElementById("rf1").className = 'fa fa-star checked'
        document.getElementById("rf2").className = 'fa fa-star checked'
        document.getElementById("rf3").className = 'fa fa-star checked'
        document.getElementById("rf4").className = 'fa fa-star checked'
        document.getElementById("rf5").className = 'fa fa-star'
    }
    document.getElementById("rf3").onclick = function () {
        document.getElementById("rf1").className = 'fa fa-star checked'
        document.getElementById("rf2").className = 'fa fa-star checked'
        document.getElementById("rf3").className = 'fa fa-star checked'
        document.getElementById("rf4").className = 'fa fa-star'
        document.getElementById("rf5").className = 'fa fa-star'
    }
    document.getElementById("rf2").onclick = function () {
        document.getElementById("rf1").className = 'fa fa-star checked'
        document.getElementById("rf2").className = 'fa fa-star checked'
        document.getElementById("rf3").className = 'fa fa-star'
        document.getElementById("rf4").className = 'fa fa-star'
        document.getElementById("rf5").className = 'fa fa-star'
    }
    document.getElementById("rf1").onclick = function () {
        document.getElementById("rf1").className = 'fa fa-star checked'
        document.getElementById("rf2").className = 'fa fa-star'
        document.getElementById("rf3").className = 'fa fa-star'
        document.getElementById("rf4").className = 'fa fa-star'
        document.getElementById("rf5").className = 'fa fa-star'
    }
    document.getElementById("rl5").onclick = function () {
        document.getElementById("rl1").className = 'fa fa-star checked'
        document.getElementById("rl2").className = 'fa fa-star checked'
        document.getElementById("rl3").className = 'fa fa-star checked'
        document.getElementById("rl4").className = 'fa fa-star checked'
        document.getElementById("rl5").className = 'fa fa-star checked'
    }
    document.getElementById("rl4").onclick = function () {
        document.getElementById("rl1").className = 'fa fa-star checked'
        document.getElementById("rl2").className = 'fa fa-star checked'
        document.getElementById("rl3").className = 'fa fa-star checked'
        document.getElementById("rl4").className = 'fa fa-star checked'
        document.getElementById("rl5").className = 'fa fa-star'
    }
    document.getElementById("rl3").onclick = function () {
        document.getElementById("rl1").className = 'fa fa-star checked'
        document.getElementById("rl2").className = 'fa fa-star checked'
        document.getElementById("rl3").className = 'fa fa-star checked'
        document.getElementById("rl4").className = 'fa fa-star'
        document.getElementById("rl5").className = 'fa fa-star'
    }
    document.getElementById("rl2").onclick = function () {
        document.getElementById("rl1").className = 'fa fa-star checked'
        document.getElementById("rl2").className = 'fa fa-star checked'
        document.getElementById("rl3").className = 'fa fa-star'
        document.getElementById("rl4").className = 'fa fa-star'
        document.getElementById("rl5").className = 'fa fa-star'
    }
    document.getElementById("rl1").onclick = function () {
        document.getElementById("rl1").className = 'fa fa-star checked'
        document.getElementById("rl2").className = 'fa fa-star'
        document.getElementById("rl3").className = 'fa fa-star'
        document.getElementById("rl4").className = 'fa fa-star'
        document.getElementById("rl5").className = 'fa fa-star'
    }
    document.getElementById("submit").onclick = function () {
        var ro
        var rh
        var rs
        var rf
        var rl
        if (document.getElementById("ro5").className === 'fa fa-star checked') {
            ro = 5
        }
        else if (document.getElementById("ro4").className === 'fa fa-star checked') {
            ro = 4
        }
        else if (document.getElementById("ro3").className === 'fa fa-star checked') {
            ro = 3
        }
        else if (document.getElementById("ro2").className === 'fa fa-star checked') {
            ro = 2
        }
        else if (document.getElementById("ro1").className === 'fa fa-star checked') {
            ro = 1
        }
        else {
            ro = 0
        }
        if (document.getElementById("rh5").className === 'fa fa-star checked') {
            rh = 5
        }
        else if (document.getElementById("rh4").className === 'fa fa-star checked') {
            rh = 4
        }
        else if (document.getElementById("rh3").className === 'fa fa-star checked') {
            rh = 3
        }
        else if (document.getElementById("rh2").className === 'fa fa-star checked') {
            rh = 2
        }
        else if (document.getElementById("rh1").className === 'fa fa-star checked') {
            rh = 1
        }
        else {
            rh = 0
        }
        if (document.getElementById("rs5").className === 'fa fa-star checked') {
            rs = 5
        }
        else if (document.getElementById("rs4").className === 'fa fa-star checked') {
            rs = 4
        }
        else if (document.getElementById("rs3").className === 'fa fa-star checked') {
            rs = 3
        }
        else if (document.getElementById("rs2").className === 'fa fa-star checked') {
            rs = 2
        }
        else if (document.getElementById("rs1").className === 'fa fa-star checked') {
            rs = 1
        }
        else {
            rs = 0
        }
        if (document.getElementById("rf5").className === 'fa fa-star checked') {
            rf = 5
        }
        else if (document.getElementById("rf4").className === 'fa fa-star checked') {
            rf = 4
        }
        else if (document.getElementById("rf3").className === 'fa fa-star checked') {
            rf = 3
        }
        else if (document.getElementById("rf2").className === 'fa fa-star checked') {
            rf = 2
        }
        else if (document.getElementById("rf1").className === 'fa fa-star checked') {
            rf = 1
        }
        else {
            rf = 0
        }
        if (document.getElementById("rl5").className === 'fa fa-star checked') {
            rl = 5
        }
        else if (document.getElementById("rl4").className === 'fa fa-star checked') {
            rl = 4
        }
        else if (document.getElementById("rl3").className === 'fa fa-star checked') {
            rl = 3
        }
        else if (document.getElementById("rl2").className === 'fa fa-star checked') {
            rl = 2
        }
        else if (document.getElementById("rl1").className === 'fa fa-star checked') {
            rl = 1
        }
        else {
            rl = 0
        }



        var str = document.getElementById("makeReview").value
        hc.child(hk).push({
            Comment: str,
            Rating:
                {
                    Food: rf,
                    Hygiene: rh,
                    Location: rl,
                    Overall: ro,
                    Service: rs
                }
        })
        document.getElementById("makeReview").value = ''
        document.getElementById("ro1").className = 'fa fa-star'
        document.getElementById("ro2").className = 'fa fa-star'
        document.getElementById("ro3").className = 'fa fa-star'
        document.getElementById("ro4").className = 'fa fa-star'
        document.getElementById("ro5").className = 'fa fa-star'
        document.getElementById("rh1").className = 'fa fa-star'
        document.getElementById("rh2").className = 'fa fa-star'
        document.getElementById("rh3").className = 'fa fa-star'
        document.getElementById("rh4").className = 'fa fa-star'
        document.getElementById("rh5").className = 'fa fa-star'
        document.getElementById("rs1").className = 'fa fa-star'
        document.getElementById("rs2").className = 'fa fa-star'
        document.getElementById("rs3").className = 'fa fa-star'
        document.getElementById("rs4").className = 'fa fa-star'
        document.getElementById("rs4").className = 'fa fa-star'
        document.getElementById("rf1").className = 'fa fa-star'
        document.getElementById("rf2").className = 'fa fa-star'
        document.getElementById("rf3").className = 'fa fa-star'
        document.getElementById("rf5").className = 'fa fa-star'
        document.getElementById("rf4").className = 'fa fa-star'
        document.getElementById("rl1").className = 'fa fa-star'
        document.getElementById("rl2").className = 'fa fa-star'
        document.getElementById("rl3").className = 'fa fa-star'
        document.getElementById("rl4").className = 'fa fa-star'
        document.getElementById("rl5").className = 'fa fa-star'
        $('#or').append("<div style=\"border-left: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + str + "</div>")
        if (ro >= 4.5) {
            $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span></div>")
        }
        else if (ro < 4.5 && ro >= 3.5) {
            $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span></div>")
        }
        else if (ro < 3.5 && ro >= 2.5) {
            $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
        }
        else if (ro < 2.5 && ro >= 1.5) {
            $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
        }
        else if (ro < 1.5 && ro >= 0.5) {
            $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
        }
        else {
            $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
        }
    }
    hc.once('value', function (snapshot) {
        snapshot.child(hk).forEach(function (ss1) {
            $('#or').append("<div style=\"border-left: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + ss1.child("Comment").val() + "</div>")
            var star = ss1.child("Rating").child("Overall").val()
            if (star >= 4.5) {
                $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span></div>")
            }
            else if (star < 4.5 && star >= 3.5) {
                $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span></div>")
            }
            else if (star < 3.5 && star >= 2.5) {
                $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
            }
            else if (star < 2.5 && star >= 1.5) {
                $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
            }
            else if (star < 1.5 && star >= 0.5) {
                $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star checked\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
            }
            else {
                $('#or').append("<div style=\"border-right: 2px solid #000; border-top: 2px solid #000; border-bottom: 2px solid #000; background: #eee \">" + "<span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div>")
            }
        })
    })
});
