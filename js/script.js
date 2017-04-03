$(document).ready(function () {
	var gridSize = 16;
	var blockSize = 500 / gridSize;
	var blockQuantity = gridSize * gridSize;
	for (var i = 1; i <= blockQuantity; i += 1) {
		$('#container').append('<div class="block"></div>');
	};
	$('.block').css({
		"height": blockSize + "px",
		"width": blockSize + "px",
	});

	$('.block').mouseenter(function() {
			$(this).css({
				"background-color": "#000",
			});
		});

	$('button').click(function() {
		$('#container').empty();
		var newGridSize = prompt("Enter the number of squares per side for the grid (e.g. 16 for 16x16)");
		var newBlockSize = 500 / newGridSize;
		var newBlockQuantity = newGridSize * newGridSize;
		for (var i = 1; i <= newBlockQuantity; i += 1) {
			$('#container').append('<div class="block"></div>');
		};
		$('.block').css({
			"height": newBlockSize + "px",
			"width": newBlockSize + "px",
		});
		$('.block').mouseenter(function() {
			$(this).css({
				"background-color": "#000",
			});
		});
	});
});
