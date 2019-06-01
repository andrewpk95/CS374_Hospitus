$(document).ready(function() {
	
	//var specialty = window.location.hash.substring(1);
	var parameters = getURLParameters();
	var specialty = parameters.injury.replace("%20", " ");
	const hospitals = firebase.database().ref().child("Hospitals");

	console.log(getURLParameters());
	if (parameters.sortby) {
		console.log(parameters.sortby);
		$("input[name='sort_category'][value='" + parameters.sortby + "']").attr("checked","checked");
	}

	$("input[name='sort_category']").change(function() {
		window.location.href = "searchPage.html" + "?injury=" + parameters.injury +"&latitude="+parameters.latitude+"&longtitude="+parameters.longtitude+ "&sortby=" + this.value;
	});

	var result_list = document.getElementById("results");

	var sort_value = document.querySelector('input[name="sort_category"]:checked').value;

	hospitals.orderByChild("Rating/"+sort_value).on("value", function(snapshot){
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

				var hospital_name = document.createElement("h3");
				hospital_name.style.textDecoration = "underline";
				
				hospital_name.onclick = function() {
					window.location = "hospitalPage.html"+"?hospital-key="+childNodes.key;
				}
				hospital_name.innerHTML = node.Name;
				hospital_name.style.cursor = "pointer";
				left_div.appendChild(hospital_name);

				var image = document.createElement("img");
				
				image.setAttribute("src", "hospital_image/"+t[0]+".jpg");
				image.setAttribute("class","img");
				image.style.padding = "5px";
				image.style.cursor = "pointer";
				image.onclick = function() {
					window.location = "hospitalPage.html"+"?hospital-key="+childNodes.key;
				}
				
				left_div.appendChild(image);

				var address = document.createElement("p");
				var b = document.createElement("b");
				b.innerHTML = "Address: ";
				address.appendChild(b);
				address.innerHTML = address.innerHTML + node.Address+". ";
				

				var see_map = document.createElement("input");
				//var see_map = document.createElement("p");
				see_map.setAttribute("type","button");
				see_map.setAttribute("value","Show on map");
				//see_map.setAttribute("id","create-user");
				
				

				var modal = document.getElementById("modal");
				see_map.onclick = function() {
					var map = document.getElementById("myFrame");
					map.setAttribute("src","https://www.google.com/maps/embed/v1/directions?key=AIzaSyCvRU1kubBR8WhgxQBXqcOLmhv-YaxOTbc&origin="+parameters.latitude+","+parameters.longtitude+"&destination="+node.Address+"&mode=transit&zoom=13");
					modal.style.display = "block";
				}

				window.onclick = function(event) {
						if (event.target == modal) {
							modal.style.display = "none";
						}
				}
				address.appendChild(see_map);
				right_div.appendChild(address);
				//right_div.appendChild(see_map);


				var equipment = document.createElement("p");
				var b = document.createElement("b");
				b.innerHTML = "Equipment: ";
				equipment.appendChild(b);
				
				equipment.innerHTML = equipment.innerHTML+node.Equipments;
				right_div.appendChild(equipment);

				var facilities = document.createElement("p");
				var b = document.createElement("b");
				b.innerHTML = "Facilities: ";
				facilities.appendChild(b);
			
				facilities.innerHTML = facilities.innerHTML+node.Facilities;
				right_div.appendChild(facilities);

				var dis = document.createElement("p");
				var b = document.createElement("b");
				b.innerHTML = "Distance: ";
				dis.appendChild(b);
				var coor = node.Grid.split(",");
				var hospital_latitude = parseFloat(coor[0]);
				var hospital_longtitude = parseFloat(coor[1]);
				var latitude = parameters.latitude;
				var longtitude = parameters.longtitude;
				var d = distance(latitude, longtitude, hospital_latitude, hospital_longtitude);
				dis.innerHTML = dis.innerHTML+ Math.round(d*10)/10+" km";
				

				right_div.appendChild(dis);


				var rating = document.createElement("b");
				rating.innerHTML = "Rating: " + node.Rating.Overall;
				rating.style.float = "right";
				right_div.appendChild(rating);

				result.appendChild(left_div);
				result.appendChild(right_div);
				result_list.insertBefore(result,result_list.childNodes[0]);

			}

		})
	})

})



