let hwidth

$(document).mousemove(event => {
	hwidth = $("#h-headpls").width()/2
	
	$("#h-headpls").css({
		left: `${event.clientX - hwidth}px`,
		bottom: `${event.clientY}px`
	});
})

$(document).click(() => {
	const size = $("#h-headpls").css("font-size")
	$("#h-headpls").css({
		fontSize: `${ parseInt(size) + 5}px`
	});
})