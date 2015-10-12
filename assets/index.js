window.onload = function() {
	console.log("JS loaded");

	if(top.location != location) {
		top.location.href = document.location.href;
	}

	// section swap function
	var activeSection = "home";
	$('#menu').on("click", "h2", function(event) {
		event.preventDefault();
		var newSection = $(this).html().toLowerCase();
		if(activeSection !== newSection) {
			$('#'+activeSection).fadeOut('fast', function() {
				$('#'+newSection).fadeIn();
				activeSection = newSection;
			});
		}
	});

	// spinning circle on homepage
	// tutorial from http://codepen.io/naoyashiga/pen/HnCub
	var width = 380;
	var height = 380;
	for(var i=0; i<3; i++) {
		// create circle div
		$('#image-frame').append("<div class='circle" + i + " circle-border'></div>");
		// set width, height, and top/left position from #image-frame div
		$('.circle'+i).css("width", width-40*i);
		$('.circle'+i).css("height", height-40*i);
		$('.circle'+i).css("top", 20*i);
		$('.circle'+i).css("left", 20*i);
		// animate
		$(".circle"+i).css("-webkit-animation","spin " + (i+4)*1.5 + "s infinite linear");
		$(".circle"+i).css("animation","spin " + (i+4)*1.5 + "s infinite linear");
	}
	$('#image-frame').append("<div class='selfportrait'></div>");
}