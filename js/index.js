window.onload = function() {

	var upBtn = document.getElementsByClassName('to-top')[0];
	window.addEventListener('scroll', scrollHandler, false);
	upBtn.addEventListener('click', btnHandler, false);		
}

function scrollHandler() {

	var upBtn = document.getElementsByClassName('to-top')[0];

	var topHeight = document.documentElement.scrollTop || document.body.scrollTop,
    var viewHeight = document.documentElement.clientHeight || document.body.clientHeight;

	if (topHeight > viewHeight/1.5) {

		upBtn.style.display = 'block';

	} else {

		upBtn.style.display = 'none';
	}

	
}

function btnHandler() {

	var timer = setInterval(function() {

		if (document.documentElement.scrollTop = document.body.scrollTop != 0) {

			document.documentElement.scrollTop = document.body.scrollTop -= 10;

		}else {
			clearInterval(timer);
		}

	}, 2);
}