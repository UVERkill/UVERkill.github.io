window.onload = function() {
	console.log("JS loaded");

	var prev = 0;

	if(top.location != location) {
		top.location.href = document.location.href;
	}

	$('.proj-item').on("click", function(event) {
		var val = $(this).attr("class").slice(-1);
		$("#projectwheel").removeClass("rotate"+prev);
		$("#projectwheel").addClass("rotate"+val);
		if(prev == 0) {
			$("#proj"+val).fadeIn();
		} else if(val != prev) {
			$("#proj"+prev).fadeOut('fast', function() {
				$("#proj"+val).fadeIn();
			});
		}
		prev = val;
	});

}