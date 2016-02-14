$(document).ready(function () {

var rows = 16;
var columns = 16;
var dimension = 40;

create();
$("button").click(function() {
	$('.container').remove();
	changeNumbers();
	create();
});
function changeNumbers() {
	var grid;
	grid = prompt("How many squares per side to make the new grid?");
	rows = grid;
	columns = grid;
	dimension = 640/grid;
}
function create () {
	$('.wrapper').append("<div class='container'></div>");
	 for (var j = 0; j < rows; j++) {
        $(".container").append("<div class='row'></div>");
    }
	for (var i = 0; i < columns; i++) {
        $(".row").append("<div class='square'></div>");
    }
   
    $('.square').mouseenter(function() {
    $(this).css({"background-color": "blue"});
    	});
    $('.square').height(dimension).width(dimension);
    $('.row').height(dimension);
}
});
