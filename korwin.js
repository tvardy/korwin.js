[].filter.call(
	document.body.getElementsByTagName('*'),
	function(el) {
		return getComputedStyle(el).float !== 'left';
	}).forEach(function (el) {
		el.style.float = 'right';
	})
