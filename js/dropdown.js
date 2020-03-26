$( document ).ready(function() {
	
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
}

function changeTheme() {
	
	var theme = document.getElementById("themeSelect").value;
	
	if (theme == "theme2") {
		document.getElementById('theme_css').href = 'css/theme2.css';
	}
	else {
		document.getElementById('theme_css').href = 'css/theme1.css';
	}
}
