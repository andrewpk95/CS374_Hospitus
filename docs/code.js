// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var country_capital_pairs;

$( document ).ready(function() {
  $.ajax({
    type: "GET",
    url: 'https://s3.ap-northeast-2.amazonaws.com/ec2-54-144-69-91.compute-1.amazonaws.com/country_capital_pairs_2019.csv',
    dataType: 'text',
  }).done(function(data) {main(data);});
});

function parseCSV(data) {
  console.log(data);
}

function main(data) {
  parseCSV(data);
  var capitals = get_capitals(country_capital_pairs);

  var selected_pair = get_random_item(country_capital_pairs);

  $("#pr2__question").text(selected_pair.country);

  //Autocomplete
  $('#pr2__answer').autocomplete({
    source: capitals,
    minLength: 1,
    select: function(event, ui) {
      var input = ui.item.value;
      selected_pair = submit_answer(input, selected_pair);
        return false;
    },
    _resizeMenu: function() {
      this.menu.element.outerWidth(200);
    }
  });

  //Filters
  $('input[type=radio][name=filter]').change(function() {
    //console.log("Changing filter...");
    if (this.value == 'all') {
        //console.log("all_filter");
      $(".correct_list").show();
      $(".incorrect_list").show();
    }
    else if (this.value == 'correct') {
        //console.log("correct_filter");
      $(".correct_list").show();
      $(".incorrect_list").hide();
    }
    else if (this.value == 'wrong') {
      //console.log("wrong_filter");
      $(".correct_list").hide();
      $(".incorrect_list").show();
    }
  });

  //Submit answer when enter is pressed
  $('#pr2__answer').keydown(function(event) {
    if (event.keyCode == 13) {
      var input = $("#pr2__answer").val();
      if (input == "") return;
        selected_pair = submit_answer(input, selected_pair);
    }
  });
  //Submit answer when submit button is pressed
  $("#pr2__submit").click(function() {
    var input = $("#pr2__answer").val();
    selected_pair = submit_answer(input, selected_pair);
  });
}

//Select random item from country_capital_pairs.js
function get_random_item(array) {
	return array[Math.floor(Math.random()*array.length)];
}

//Get all capital list from country_capital_pairs.js
function get_capitals(pairs) {
	var result = [];
	for(var i = 0; i < pairs.length; i++) {
		result.push(pairs[i].capital);
	}
	return result;
}

//Submits answer and returns a new random capital country pair
function submit_answer(input, selected_pair) {
	$('#pr2__answer').autocomplete('close');

	var country = selected_pair.country;
  	var answer = selected_pair.capital;

  	var current_filter = $(':radio[name="filter"]:checked').val();
  	//console.log(current_filter);

	if (input.toUpperCase() == answer.toUpperCase() /*|| input == "qwer" /*using "qwer" as "magic" answer to debug and test*/) {
		//console.log("Correct Answer");
		var t1 = '<tr class="correct_list">';
        var t2 = '<td><font class="correct">' + country + '</font></td>';
        var t3 = '<td><font class="correct">' + answer + '</font></td>';
       	var t4 = '<td><font class="correct"><i class="fa fa-check" aria-hidden="true"></i></font><input class="delete" type=button value="Delete"></td>';
        var t5 = '</tr>';
        var result = t1 + t2 + t3 + t4 + t5;
        $(".submit_list").after(result);
        if (current_filter == "wrong") {
        	//console.log("change to all_filter");
        	$('input:radio[name=filter]:input[value=all]').prop("checked", true);
        	$(".correct_list").show();
  			$(".incorrect_list").show();
        }
	}
	else {
		//console.log("Wrong Answer");
		var t1 = '<tr class="incorrect_list">';
        var t2 = '<td class="incorrect"><font>' + country + '</font></td>';
        var t3 = '<td class="incorrect"><font id="strike-through">' + input + '</font></td>';
        var t4 = '<td class="incorrect"><font>' + answer + '</font><input class="delete" type=button value="Delete"></td>';
        var t5 = '</tr>';
        var result = t1 + t2 + t3 + t4 + t5;
		$(".submit_list").after(result);
		if (current_filter == "correct") {
        	//console.log("change to all_filter");
        	$('input:radio[name=filter]:input[value=all]').prop("checked", true);
        	$(".correct_list").show();
  			$(".incorrect_list").show();
        }
	}
	//Delete entry when delete button is pressed
	$(".delete").click(function() {
		//console.log("Delete");
		$(this).parent().parent().remove();
	});
	//Reset
	var new_pair = get_random_item(pairs);

	$("#pr2__answer").val("");
	$("#Country").text(country);
	$("#pr2__answer").focus();
	$("#pr2__question").text(new_pair.country);

	return new_pair;
}


