window.onload = function() {
	
	var btn = $('#btn');
	console.log('1');
	btn.addEventListener('click', bundle);
}

function bundle() {
	console.log('2');
	alert("Hello!");
}