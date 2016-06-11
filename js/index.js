window.onload = function() {
	
	var btn = document.getELementsByClass('btn');
	console.log('1');
	console.log(btn);
	for (var i = 0, len = btn.length; i < len; ++i) {

		btn[i].addEventListener('click', bundle);		
	}
	
}

function bundle() {
	console.log('2');
	alert("Hello!");
}