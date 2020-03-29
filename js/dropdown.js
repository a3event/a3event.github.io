$( document ).ready(function() {
	
	if(localStorage.getItem('actor1')){
		document.getElementById('actorSelect1').value = localStorage.actor1;
	}
	if(localStorage.getItem('actor2')){
		document.getElementById('actorSelect2').value = localStorage.actor2;
	}
	
	filterSkills();
	
	if(localStorage.getItem('userTheme')){
		document.getElementById('themeSelect').value = localStorage.userTheme;
		changeTheme(localStorage.userTheme);
	}
	
	showGacha = document.getElementById("show_gacha");
	showFree = document.getElementById("show_free");
	showSSR = document.getElementById("show_ssr");
	showSR = document.getElementById("show_sr");
	showFuture = document.getElementById("show_future");
	
});

function filterSkills() {
	var actor1 = document.getElementById("actorSelect1").value;
	var actor2 = document.getElementById("actorSelect2").value;
	var rows = $('table.evt4 tr');
	
	if (actor1 == actor2) {
		document.getElementById("actorSelect2").value = 'none';
	}

	if (actor1 == "all") {
		for(var i=0; i<rows.length; i++){
			rows.eq(i).show();
		}
	}
	else {
		for(var i=0; i<rows.length; i++){
			if(rows[i].innerHTML.includes(actor1) || rows[i].innerHTML.includes(actor2) || rows[i].classList.contains('showit')){
				rows.eq(i).show();
			}
			else {
				rows.eq(i).hide();
			}
		}
	}
	
	localStorage.setItem("actor1", actor1);
	localStorage.setItem("actor2", actor2);
}

function filterCards(id) {
	
	var checkBox = document.getElementById(id);
	var table = $('table.evt5 td');
	
	if (id == "show_gacha") {
		if (checkBox.checked == false){
			if (showFree.checked == false){
				showFree.checked = true;
				filterCards("show_free");
			}
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_ssr') || table[i].classList.contains('gacha_sr')){
					table[i].classList.add("hide_gacha");
					table.eq(i).css('visibility', 'hidden');
				}
			}
		}
		else if (checkBox.checked == true){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_ssr') || table[i].classList.contains('gacha_sr')){
					table[i].classList.remove("hide_gacha");
					if(!(table[i].classList.contains('hide_future'))){
						table.eq(i).css('visibility', 'visible');
					}
				}
			}
			filterCards("show_ssr");
			filterCards("show_sr");
		}
	}
	
	if (id == "show_free") {
		if (checkBox.checked == false){
			if (showGacha.checked == false){
				showGacha.checked = true;
				filterCards("show_gacha");
			}
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('free_ssr') || table[i].classList.contains('free_sr')){
					table[i].classList.add("hide_free");
					table.eq(i).css('visibility', 'hidden');
				}
			}
		}
		else if (checkBox.checked == true){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('free_ssr') || table[i].classList.contains('free_sr')){
					table[i].classList.remove("hide_free");
					if(!(table[i].classList.contains('hide_future'))){
						table.eq(i).css('visibility', 'visible');
					}
				}
			}
			filterCards("show_ssr");
			filterCards("show_sr");
		}
	}
	
	if (id == "show_ssr") {
		if (checkBox.checked == false){
			if (showSR.checked == false){
				showSR.checked = true;
				filterCards("show_sr");
			}
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_ssr') || table[i].classList.contains('free_ssr')){
					table.eq(i).css('visibility', 'hidden');
				}
			}
		}
		else if (checkBox.checked == true){
			for(var i=0; i<table.length; i++){
				if((table[i].classList.contains('gacha_ssr') || table[i].classList.contains('free_ssr')) && !(table[i].classList.contains('hide_gacha')) && !(table[i].classList.contains('hide_free')) && !(table[i].classList.contains('hide_future'))){
					table.eq(i).css('visibility', 'visible');
				}
			}
		}
	}
	
	if (id == "show_sr") {
		if (checkBox.checked == false){
			if (showSSR.checked == false){
				showSSR.checked = true;
				filterCards("show_ssr");
			}
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_sr') || table[i].classList.contains('free_sr')){
					table.eq(i).css('visibility', 'hidden');
				}
			}
		}
		else if (checkBox.checked == true){
			for(var i=0; i<table.length; i++){
				if((table[i].classList.contains('gacha_sr') || table[i].classList.contains('free_sr')) && !(table[i].classList.contains('hide_gacha')) && !(table[i].classList.contains('hide_free')) && !(table[i].classList.contains('hide_future'))){
					table.eq(i).css('visibility', 'visible');
				}
			}
		}
	}
	
	if (id == "show_future") {
		if (checkBox.checked == false){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('future')){
					table.eq(i).css('visibility', 'hidden');
					table[i].classList.add("hide_future");
				}
			}
		}
		else {
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('future')){
					table[i].classList.remove("hide_future");
					if(!(table[i].classList.contains('hide_gacha')) && !(table[i].classList.contains('hide_free'))){
						table.eq(i).css('visibility', 'visible');
					}
				}
			}
			filterCards("show_ssr");
			filterCards("show_sr");
		}
	}
}

function changeTheme(t) {
	
	if (t == "theme1") {
		document.getElementById('theme_css').href = 'https://a3event.github.io/css/theme1.css';
	}
	else {
		document.getElementById('theme_css').href = 'https://a3event.github.io/css/theme2.css';
	}
	
	localStorage.setItem("userTheme", t);
}
