//Verifica mobile
//window.onload = function() {
function checaMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log('Dispositivo Movel');
		//Trata tela em mobile
		$(document).ready(function(){
			$(".titleContainer").removeClass("container");
			$(".corpoContainer").removeClass("container");
			$(".autContainer").removeClass("container");
			$(".comentContainer").removeClass("container");
			$(".aut01").removeClass("col-1");
			$(".aut02").removeClass("col-9");
			$(".aut03").removeClass("col-2");
			$(".col-1").addClass("col-auto");
			$(".col-2").addClass("col-auto");
			$(".col-auto").removeClass("col-1");
			$(".col-auto").removeClass("col-2");
			$(".col-9").addClass("col-12");
			$(".col-12").removeClass("col-9");
			$(".aut01").addClass("col-auto");
			$(".aut02").addClass("col-9");
			$(".aut03").addClass("col-2");
		});
    }
}
checaMobile();

//Controlar barra de subtitulo Globo
$(document).scroll(function() { 
	if($(window).scrollTop() === 0) {
		document.getElementById("navSub").style.display = "inline-block";
	}else{
		document.getElementById("navSub").style.display = "none";
	}
});


//Control promo
$(document).ready(function () {
	//by default, the static menu is hidden
	var showStaticMenuBar = false;
	//when scrolling...
	$(window).scroll(function () {
		//if the static menu is not yet visible...
		if (showStaticMenuBar == false) {
			//if I scroll more than 200px, I show it
				if ($(window).scrollTop() >= 800) {
				//showing the static menu
				$("#headerPromo").addClass("fixed");
				showStaticMenuBar = true;
			}
		}
		//if the static menu is already visible...
		else {
			if ($(window).scrollTop() < 800) {
				$("#headerPromo").removeClass("fixed");
				//I define it as hidden
				showStaticMenuBar = false;
			}
		}
	});
});

//Contador banner promoção footer
$( window ).scroll(function() {
	var nScrollPosition = $( window ).scrollTop();
	 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		if(nScrollPosition>=8000){
			$( ".bannerdesconto" ).css( "display", "block" );
		}else{
			$( ".bannerdesconto" ).css( "display", "none" );
		}
	 }else{
		 if(nScrollPosition>=8000){
			$( ".bannerdesconto" ).css( "display", "block" );
		}else{
			$( ".bannerdesconto" ).css( "display", "none" );
		}
	 }
});

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	function updateClock() {
		var t = getTimeRemaining(endtime);
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 01* 01 * 10 * 60 * 1000);
initializeClock('clockdiv', deadline);


