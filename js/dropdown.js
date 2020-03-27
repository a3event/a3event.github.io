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

function changeTheme(t) {
	
	if (t == "theme1") {
		document.getElementById('theme_css').href = 'https://a3event.github.io/css/theme1.css';
	}
	else {
		document.getElementById('theme_css').href = 'https://a3event.github.io/css/theme2.css';
	}
	
	localStorage.setItem("userTheme", t);
}
