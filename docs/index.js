
var injuries = [
	"Back Injury",
	"Leg Injury",
	"Arm Injury",
	"Head Injury"
]

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
});

function submit_injury(input) {
	window.location.href = "searchPage.html";
}