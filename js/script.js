$(document).ready(function () {
	var gridSize = 16;
	for (var i = 1; i <= 100; i += 1) {
		$('#container').append('<div class="grid"></div>');
	};
	$('.grid').mouseenter(function() {
		$(this).fadeTo('fast', 0.1);
	});
	$('.grid').mouseleave(function() {
		$(this).fadeTo('fast', 1.0);
	});
});
