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
	
	//Unique classes: hide_gacha, hide_free, hide_ssr, hide_sr
	
	if (id == "show_gacha") {
		if (checkBox.checked == false){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_ssr') || table[i].classList.contains('gacha_sr')){
					table.eq(i).css('visibility', 'hidden');
					table[i].classList.add("hide_gacha");
				}
			}
		}
		else {
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_ssr') || table[i].classList.contains('gacha_sr')){
					table.eq(i).css('visibility', 'visible');
					table[i].classList.remove("hide_gacha");
				}
			}
			filterCards("show_ssr");
			filterCards("show_sr");
		}
	}
	
	if (id == "show_free") {
		if (checkBox.checked == false){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('free_ssr') || table[i].classList.contains('free_sr')){
					table.eq(i).css('visibility', 'hidden');
					table[i].classList.add("hide_free");
				}
			}
		}
		else {
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('free_ssr') || table[i].classList.contains('free_sr')){
					table.eq(i).css('visibility', 'visible');
					table[i].classList.remove("hide_free");
				}
			}
			filterCards("show_ssr");
			filterCards("show_sr");
		}
	}
	
	if (id == "show_ssr") {
		if (checkBox.checked == false){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_ssr') || table[i].classList.contains('free_ssr')){
					table.eq(i).css('visibility', 'hidden');
				}
			}
		}
		else {
			for(var i=0; i<table.length; i++){
				if((table[i].classList.contains('gacha_ssr') || table[i].classList.contains('free_ssr')) && !(table[i].classList.contains('hide_gacha')) && !(table[i].classList.contains('hide_free'))){
					table.eq(i).css('visibility', 'visible');
				}
			}
		}
	}
	
	if (id == "show_sr") {
		if (checkBox.checked == false){
			for(var i=0; i<table.length; i++){
				if(table[i].classList.contains('gacha_sr') || table[i].classList.contains('free_sr')){
					table.eq(i).css('visibility', 'hidden');
				}
			}
		}
		else {
			for(var i=0; i<table.length; i++){
				if((table[i].classList.contains('gacha_sr') || table[i].classList.contains('free_sr')) && !(table[i].classList.contains('hide_gacha')) && !(table[i].classList.contains('hide_free'))){
					table.eq(i).css('visibility', 'visible');
				}
			}
		}
	}
}

function changeTheme(t) {
	
	if (t == "theme1") {
		document.getElementById('theme_css').href = 'C:/Users/Ruby/Documents/T/css/theme1.css';
	}
	else {
		document.getElementById('theme_css').href = 'C:/Users/Ruby/Documents/T/css/theme2.css';
	}
	
	localStorage.setItem("userTheme", t);
}
