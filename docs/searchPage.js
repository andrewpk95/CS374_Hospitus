
//var specialty = window.location.hash.substring(1);

var specialty = "Back Injury";

const hospitals = firebase.database().ref().child("Hospitals");

//hospitals.on("value", function(snapshot){
//	alert(snapshot.child("1/Specialty/1").val());
//})
var result_list = document.getElementById("results");
hospitals.on("value", function(snapshot){
	snapshot.forEach(function(childNodes) {
		if (childNodes.val().Specialty == specialty) {

			var node = childNodes.val();

			var result = document.createElement("div");
			result.setAttribute("class","result");
;			var left_div = document.createElement("div");
			left_div.setAttribute("class","left_div");
			var right_div = document.createElement("div");
			right_div.setAttribute("class","right_div");

			var t = node.Name.split(" ");

			var hospital_name = document.createElement("a");
			hospital_name.setAttribute("href","hospitalPage.html"+"#"+t[0]);
			hospital_name.innerHTML = node.Name;
			left_div.appendChild(hospital_name);

			var image = document.createElement("img");
			
			image.setAttribute("src", "hospital_image/"+t[0]+".jpg");
			image.setAttribute("class","img");
			image.style.padding = "5px";
			image.onclick = function() {
				window.location = "hospitalPage.html"+"#"+t[0];
			}
			//image.setAttribute("href","hospitalPage.html"+"#"+t[0]);
			left_div.appendChild(image);

			var address = document.createElement("p");
			address.innerHTML = "Address: " + node.Address+". ";
			address.style.float = "left";
			right_div.appendChild(address);

			var see_map = document.createElement("p");
			see_map.innerHTML = "Show on map";
			see_map.style.textDecoration = "underline";
			

			var modal = document.getElementById("modal");
			see_map.onclick = function() {
				var map = document.getElementById("myFrame");
				map.setAttribute("src","https://www.google.com/maps/embed/v1/place?key=AIzaSyCvRU1kubBR8WhgxQBXqcOLmhv-YaxOTbc&q="+node.Address+"&language=en&zoom=15");
				modal.style.display = "block";
			}

			window.onclick = function(event) {
  				if (event.target == modal) {
    				modal.style.display = "none";
  				}
			}
			right_div.appendChild(see_map);


			var equipment = document.createElement("p");
			equipment.innerHTML = "Equipment: " + node.Equipments;
			right_div.appendChild(equipment);

			//var accommodation = document.createElement("p");
			//accommodation.innerHTML = "Accommodation: "+ node.Rooms["Available"] + "/" + node.Rooms["Total"];
			//right_div.appendChild(accommodation);

			var rating = document.createElement("p");
			rating.innerHTML = "("+node.Rating.Overall+")";
			rating.style.float = "right";
			right_div.appendChild(rating);

			result.appendChild(left_div);
			result.appendChild(right_div);
			result_list.appendChild(result);

		}

	})
})