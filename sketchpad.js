var rows = 16;
var columns = 16;
var $row = $("<div>", {
    class: 'row'
});
var $square = $("<div>", {
    class: 'square'
});
var grid = 16;
var width = $('#container').width;
var height = $('#container').height;
$(document).ready(function () {
		   	create();
        $('.square').mouseenter(function() {
    		$(this).css({"background-color": "blue"});
    	});
    	$("button").click(function() {
	    	$('#container').empty();
			changeNumbers();
			create();
    });
});
function create () {
	for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (i = 0; i < rows; i++) {
        $("#container").append($row.clone());
    }
}
function changeNumbers() {
	grid = prompt("How many squares per side to make the new grid?");
	$('.square').css({"width": width/grid, "height": height/grid});
	$('.row').css({"height": height/grid});
	rows = grid;
	columns = grid;
}

