window.onload = function() {
	console.log("JS loaded");

	var prev = 0;

	$('.proj-item').on("click", function(event) {
		var val = $(this).attr("class").slice(-1);
		if(val != prev) {
			$("#projectwheel").removeClass("rotate"+prev);
			$("#projectwheel").addClass("rotate"+val);
			prev = val;
		}
	});

}