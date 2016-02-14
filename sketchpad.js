$(document).ready(function () {

var rows = 16;
var columns = 16;
var $row = $("<div>", {
    class: 'row'
});
var $square = $("<div>", {
    class: 'square'
});
var dimension = 25;

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
	dimension = 400/grid;
}
function create () {
	$('.wrapper').append("<div class='container'></div>");
	for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var j = 0; j < rows; j++) {
        $(".container").append($row.clone());
    }
    $('.square').mouseenter(function() {
    $(this).css({"background-color": "blue"});
    	});
    $('.square').height(dimension).width(dimension);
    $('.row').height(dimension);
}
});
