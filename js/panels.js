"use strict";
let v = 1;
let y = 0;
let s = 0;
let z = 0;
let p = 0;
let t = 0;
let a = 0;
let c = 0;
let d = 0;
let themeValue = 2;
let myInputW = 810;
let myInputH = 240;
let myArea = 0;
let myNEPA = document.getElementById("myNEPA");
let myZEPA = document.getElementById("myZEPA");
let myTEPA = document.getElementById("myTEPA");
let mySyll = document.getElementById("mySyll");
let myStr3 = document.getElementById("myStr3");
let myFusi = document.getElementById("myFusi");
let myTaoE = document.getElementById("myTaoE");
let myTaoa = document.getElementById("myTaoa");
let myTaob = document.getElementById("myTaob");
let myTaoc = document.getElementById("myTaoc");
let myTao1 = document.getElementById("myTao1");
let myTao2 = document.getElementById("myTao2");
let myTao3 = document.getElementById("myTao3");
let myTao4 = document.getElementById("myTao4");
let myTao5 = document.getElementById("myTao5");
let myTao6 = document.getElementById("myTao6");
// TOP BUTTON PANEL
function myfunNEPA() {
	if ( myNEPA.checked == true ) {
		document.getElementById("myZEPA").checked = false;
		document.getElementById("myTEPA").checked = false;
		document.getElementById("myTaoE").style.display = "none";
		myCookie();
		if ( a == 0 ) {
			document.getElementById("neo").style.display = "block";
			document.getElementById("zen").style.display = "none";
			document.getElementById("tao").style.display = "none";
		};
	} else {
		document.getElementById("myNEPA").checked = true;
		myfunNEPA();
	};
};
function myfunZEPA() {
	if ( myZEPA.checked == true ) {
		document.getElementById("myNEPA").checked = false;
		document.getElementById("myTEPA").checked = false;
		document.getElementById("myTaoE").style.display = "none";
		myCookie();
		if ( a == 0 ) {
			document.getElementById("neo").style.display = "none";
			document.getElementById("zen").style.display = "block";
			document.getElementById("tao").style.display = "none";
		};
	} else {
		document.getElementById("myZEPA").checked = true;
		myfunZEPA();
	};
};
function myfunTEPA() {
	if ( myTEPA.checked == true ) {
		document.getElementById("myNEPA").checked = false;
		document.getElementById("myZEPA").checked = false;
		document.getElementById("myTaoE").style.display = "inline";
		myCookie();
		if ( a == 0 ) {
			document.getElementById("neo").style.display = "none";
			document.getElementById("zen").style.display = "none";
			document.getElementById("tao").style.display = "block";
		};
	} else {
		document.getElementById("myTEPA").checked = true;
		myfunTEPA();
	};
};
function myFunction() {
	myCookie();
};
function myFunTaoA() {
	if ( myTaoa.checked == true ) {
		document.getElementById("myTaob").checked = false;
		document.getElementById("myTao1").style.display = "none";
		document.getElementById("myTao3").style.display = "none";
		document.getElementById("myTao2").style.display = "inline";
		document.getElementById("myTao4").style.display = "inline";
		document.getElementById("myTao5").style.display = "inline";
		document.getElementById("myTao6").style.display = "inline";
	} else {
		document.getElementById("myTao2").style.display = "none";
		document.getElementById("myTao4").style.display = "none";
		document.getElementById("myTao1").style.display = "inline";
		document.getElementById("myTao3").style.display = "inline";
	};
	myCookie();
};
function myFunTaoB() {
	if ( myTaob.checked == true ) {
		document.getElementById("myTaoa").checked = false;
		document.getElementById("myTao1").style.display = "none";
		document.getElementById("myTao2").style.display = "none";
		document.getElementById("myTao3").style.display = "none";
		document.getElementById("myTao4").style.display = "none";
		document.getElementById("myTao5").style.display = "none";
		document.getElementById("myTao6").style.display = "none";
	} else {
		document.getElementById("myTao1").style.display = "inline";
		document.getElementById("myTao3").style.display = "inline";
		document.getElementById("myTao5").style.display = "inline";
		document.getElementById("myTao6").style.display = "inline";
	};
	myCookie();
};
function myFunTaoC() {
	myCookie();
};
function myPho() {
	if ( a == 0 ) {
		document.getElementById("neo").style.display = "block";
		document.getElementById("zen").style.display = "block";
		document.getElementById("tao").style.display = "block";
		a = 1;
	} else {
		if ( myNEPA.checked == true ) {
			document.getElementById("neo").style.display = "block";
			document.getElementById("zen").style.display = "none";
			document.getElementById("tao").style.display = "none";
		};
		if ( myZEPA.checked == true ) {
			document.getElementById("neo").style.display = "none";
			document.getElementById("zen").style.display = "block";
			document.getElementById("tao").style.display = "none";
		};
		if ( myTEPA.checked == true ) {
			document.getElementById("neo").style.display = "none";
			document.getElementById("zen").style.display = "none";
			document.getElementById("tao").style.display = "block";
		};
		a = 0;
	};
};
function myBib() {
	if ( c == 0 ) {
		let i = 0;
		while ( i < 7 ) {
			document.getElementsByClassName("bibp")[i].style.display = "block";
			i = i + 1;
		};
		i = 0;
		while ( i < 2 ) {
			document.getElementsByClassName("bibs")[i].style.display = "inline";
			i = i + 1;
		};
		c = 1;
	} else {
		let i = 0;
		while ( i < 7 ) {
			document.getElementsByClassName("bibp")[i].style.display = "none";
			i = i + 1;
		};
		i = 0;
		while ( i < 2 ) {
			document.getElementsByClassName("bibs")[i].style.display = "none";
			i = i + 1;
		};
		c = 0;
	};
};
function myPro() {
	if ( d == 0 ) {
		a = 0;
		c = 0;
		myPho();
		myBib();
		d = 1;
	} else {
		a = 1;
		c = 1;
		myPho();
		myBib();
		d = 0;
	};
	myCookie();
};
// LOWER BUTTON PANEL
function myChange() {
	let text;
	text = document.getElementById("myInput").value.toString();
	if ( myNEPA.checked == true ) { v = 1 };
	if ( myZEPA.checked == true ) { v = 2 };
	if ( myTEPA.checked == true ) { v = 3 };
	if ( mySyll.checked == true ) { y = 1 } else { y = 0 };
	if ( myStr3.checked == true ) { s = 1 } else { s = 0 };
	if ( myFusi.checked == true ) { z = 1 } else { z = 0 };
	if ( myTaoa.checked == false && myTaob.checked == false && myTaoc.checked == false ) { p = 0 };
	if ( myTaoa.checked == true && myTaob.checked == false && myTaoc.checked == false ) { p = 1 };
	if ( myTaoa.checked == true && myTaob.checked == false && myTaoc.checked == true ) { p = 2 };
	if ( myTaoa.checked == false && myTaob.checked == true && myTaoc.checked == false ) { p = 3 };
	if ( myTaoa.checked == false && myTaob.checked == true && myTaoc.checked == true ) { p = 4 };
	if ( myTaoa.checked == false && myTaob.checked == false && myTaoc.checked == true ) { p = 5 };
	text = Transcribe(text,v,y,s,z,p);
	document.getElementById("myResult").value = text;
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myClear() {
	document.getElementById("myInput").value = "";
	document.getElementById("myResult").value = "";
};
function myAaTex() {
	let amatex = document.getElementById("myInput").value.toString();
	document.getElementById("myInput").value = myMoTex(amatex);
	document.getElementById("myInput").scrollTop = 0;
	document.getElementById("myResult").scrollTop = 0;
};
function myMoTex(abtext) {
	abtext = abtext.toLowerCase();
	// let abtext = abtext.replace(/\s+/g, " ");
	// let abtext = abtext.trim();
	abtext = abtext.replace(/\n+/g, "êăõ");
	abtext = abtext.replace(/\s+/g, " ");
	abtext = abtext.replace(/êăõ* /g, "\n\n");
	abtext = abtext.replace(/êăõ/g, "\n\n");
	abtext = abtext.trim();
	// abtext = abtext.replace(/«/g,'"').replace(/»/g,'"').replace(/“/g,'"').replace(/”/g,'"').replace(/‘/g,"'").replace(/’/g,"'").replace(/`/g,"'").replace(/´/g,"'");
	// abtext = abtext.replace(/[^a-z0-9 áéíóúüñ\n",:'\.\—\_\-?¿!¡;\(\)\[\]\{\}\…\+\=]/g,"");
	return abtext;
};
function mySave() {
	let text1 = document.getElementById("myInput").value;
	let text2 = document.getElementById("myResult").value;
	let text3 = "=== ORIGINAL TEXT ===" + "\n\n" + text1 + "\n\n" + "=== PHONEMES TEXT ===" + "\n\n" + text2;
	let text4 = text3.replace(/\n/g, "\r\n");
	let text5 = text4.replace(/\r+/g, "\r");
	let factor = document.createElement('a');
	factor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text5));
	factor.setAttribute("download", "text.txt");
	factor.style.display = "none";
	document.body.appendChild(factor);
	factor.click();
	document.body.removeChild(factor);
};
function myCopy() {
	let text1 = document.getElementById("myInput").value;
	let text2 = document.getElementById("myResult").value;
	let text3 = "=== ORIGINAL TEXT ===" + "\n\n" + text1 + "\n\n" + "=== PHONEMES TEXT ===" + "\n\n" + text2;
	let text4 = text3.replace(/\n/g, "\r\n");
	let text5 = text4.replace(/\r+/g, "\r");
	const textArea = document.createElement("textarea");
	textArea.value = text2;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	// window.alert("Good");
	document.getElementById("myCopy").innerHTML = "Good";
	setTimeout( function() { document.getElementById("myCopy").innerHTML = "Copy"; }, 1800 );
};
// THEME
function myTheme() {
	if ( themeValue == 2 ) {
		document.body.style.color = "#efefef";
		document.body.style.backgroundColor = "#303030";
		let i = 0;
		while ( i < 2 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#efefef";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#303030";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #969696";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#2b2b2b #363636";
			i = i + 1;
		};
		let u = 0;
		while ( u < 6 ) {
			document.getElementsByTagName("button")[u].style.color = "#efefef";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#303030";
			document.getElementsByTagName("button")[u].style.border = "1px solid #969696";
			u = u + 1;
		};
		let a = 0;
		while ( a < 19 ) {
			document.getElementsByTagName("a")[a].style.color = "#c63636";
			document.getElementsByTagName("a")[a].style.backgroundColor = "#303030";
			a = a + 1;
		};
		themeValue = 1;
		t = 2;
		myCookie();
	} else {
		document.body.style.color = "#181818";
		document.body.style.backgroundColor = "#ffffff";
		let i = 0;
		while ( i < 2 ) {
			document.getElementsByTagName("textarea")[i].style.color = "#181818";
			document.getElementsByTagName("textarea")[i].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("textarea")[i].style.border = "1px solid #999999";
			document.getElementsByTagName("textarea")[i].style.scrollbarColor = "#c9c9c9 #fbfbfb";
			i = i + 1;
		};
		let u = 0;
		while ( u < 6 ) {
			document.getElementsByTagName("button")[u].style.color = "#181818";
			document.getElementsByTagName("button")[u].style.backgroundColor = "#ffffff";
			document.getElementsByTagName("button")[u].style.border = "1px solid #999999";
			u = u + 1;
		};
		let a = 0;
		while ( a < 19 ) {
			document.getElementsByTagName("a")[a].style.color = "#0000ff";
			document.getElementsByTagName("a")[a].style.backgroundColor = "#ffffff";
			a = a + 1;
		};
		themeValue = 2;
		t = 1;
		myCookie();
	};
};
// TEXTAREA
function mySize() {
	myInputW = document.getElementById("myInput").offsetWidth;
	myInputH = document.getElementById("myInput").offsetHeight;
	myTextarea();
};
function myTextarea() {
	if ( myInputW < 810 ) { myInputW = 810; };
	if ( myInputH < 240 ) { myInputH = 240; };
	if ( myInputW > document.getElementById("main").offsetWidth ) { myInputW = document.getElementById("main").offsetWidth; };
	if ( myInputH > screen.height ) { myInputH = screen.height; };
	if ( myArea == 1 ) {
		myInputW = document.getElementById("main").offsetWidth;
		myInputH = screen.height;
	};
	let i = 0;
	while ( i < 2 ) {
		document.getElementsByTagName("textarea")[i].style.width = myInputW + "px";
		document.getElementsByTagName("textarea")[i].style.height = myInputH + "px";
		i = i + 1;
	};
	myCookie();
};
// COOKIES
function myCookie() {
	if ( myNEPA.checked == true ) { v = 1 };
	if ( myZEPA.checked == true ) { v = 2 };
	if ( myTEPA.checked == true ) { v = 3 };
	if ( mySyll.checked == true ) { y = 1 } else { y = 0 };
	if ( myStr3.checked == true ) { s = 1 } else { s = 0 };
	if ( myFusi.checked == true ) { z = 1 } else { z = 0 };
	if ( myTaoa.checked == false && myTaob.checked == false && myTaoc.checked == false ) { p = 0 };
	if ( myTaoa.checked == true && myTaob.checked == false && myTaoc.checked == false ) { p = 1 };
	if ( myTaoa.checked == true && myTaob.checked == false && myTaoc.checked == true ) { p = 2 };
	if ( myTaoa.checked == false && myTaob.checked == true && myTaoc.checked == false ) { p = 3 };
	if ( myTaoa.checked == false && myTaob.checked == true && myTaoc.checked == true ) { p = 4 };
	if ( myTaoa.checked == false && myTaob.checked == false && myTaoc.checked == true ) { p = 5 };
	document.cookie = "neoenglish=" + v + "," + y + "," + s + "," + z + "," + p + "," + t + "," + d + "," + myInputW + "," + myInputH + "," + myArea + ",~" + "; max-age=31415926 ; path=/";
};
// SETTING
function mySetting() {
	if ( document.cookie.search(/neoenglish=/) !== -1 ) {
		let settingDecode = decodeURIComponent(document.cookie);
		let settingValue = settingDecode.replace(/^.*(neoenglish=)(.*)(,~).*/,"$2");
		let settingLista = settingValue.trim().split(",");
		if ( settingLista[0] == 1 ) { document.getElementById("myNEPA").checked = true ; myfunNEPA(); };
		if ( settingLista[0] == 2 ) { document.getElementById("myZEPA").checked = true ; myfunZEPA(); };
		if ( settingLista[0] == 3 ) { document.getElementById("myTEPA").checked = true ; myfunTEPA(); };
		if ( settingLista[1] == 1 ) { document.getElementById("mySyll").checked = true ; myFunction(); };
		if ( settingLista[1] == 0 ) { document.getElementById("mySyll").checked = false ; myFunction(); };
		if ( settingLista[2] == 1 ) { document.getElementById("myStr3").checked = true ; myFunction(); };
		if ( settingLista[2] == 0 ) { document.getElementById("myStr3").checked = false ; myFunction(); };
		if ( settingLista[3] == 1 ) { document.getElementById("myFusi").checked = true ; myFunction(); };
		if ( settingLista[3] == 0 ) { document.getElementById("myFusi").checked = false ; myFunction(); };
		if ( settingLista[4] == 0 ) { document.getElementById("myTaoa").checked = false ; document.getElementById("myTaob").checked = false ; document.getElementById("myTaoc").checked = false ; myFunTaoA() ; myFunTaoB() ; myFunTaoC() ; };
		if ( settingLista[4] == 1 ) { document.getElementById("myTaoa").checked = true ; document.getElementById("myTaob").checked = false ; document.getElementById("myTaoc").checked = false ; myFunTaoA() ; myFunTaoB() ; myFunTaoC() ; };
		if ( settingLista[4] == 2 ) { document.getElementById("myTaoa").checked = true ; document.getElementById("myTaob").checked = false ; document.getElementById("myTaoc").checked = true ; myFunTaoA() ; myFunTaoB() ; myFunTaoC() ; };
		if ( settingLista[4] == 3 ) { document.getElementById("myTaoa").checked = false ; document.getElementById("myTaob").checked = true ; document.getElementById("myTaoc").checked = false ; myFunTaoA() ; myFunTaoB() ; myFunTaoC() ; };
		if ( settingLista[4] == 4 ) { document.getElementById("myTaoa").checked = false ; document.getElementById("myTaob").checked = true ; document.getElementById("myTaoc").checked = true ; myFunTaoA() ; myFunTaoB() ; myFunTaoC() ; };
		if ( settingLista[4] == 5 ) { document.getElementById("myTaoa").checked = false ; document.getElementById("myTaob").checked = false ; document.getElementById("myTaoc").checked = true ; myFunTaoA() ; myFunTaoB() ; myFunTaoC() ; };
		if ( settingLista[5] == 1 || settingLista[5] == 2 ) { themeValue = settingLista[5] ; myTheme(); };
		if ( settingLista[6] == 0 ) { d = 1 ; myPro(); };
		if ( settingLista[6] == 1 ) { d = 0 ; myPro(); };
		if ( settingLista[7] !== undefined ) { myInputW = settingLista[7]; };
		if ( settingLista[8] !== undefined ) { myInputH = settingLista[8]; };
		if ( settingLista[9] !== undefined ) { myArea = settingLista[9]; };
		myTextarea();
	};
};
// TEXTAREA
function myModeT() {
	if ( myArea == 0 ) {
		myArea = 1;
		myCookie();
		myTextarea();
	} else {
		myInputW = 810;
		myInputH = 240;
		myArea = 0;
		myCookie();
		myTextarea();
	};
};
// RESPONSIVE
function myResponsive() {
	let widthMain = document.getElementById("main").offsetWidth;
	// MARGENS VALUES
	let valueMargen = myCalculation( widthMain, 300, 700, 0.45, 1.20 ) ;
	document.getElementById("main").style.margin = 0 + "em" + " " + valueMargen + "em" ;
	// FONT-SIZE MAIN
	let valueMfs = myCalculation( widthMain, 200, 600, 16, 20 ) ;
	document.getElementById("main").style.fontSize = valueMfs + "px" ;
	// FONT-SIZE H1 & H2
	let valueHfs = myCalculation( widthMain, 200, 600, 24, 36 ) ;
	let widthH1 = myCalculation( widthMain, 120, 230, 0.60, 1 ) ;
	document.getElementsByTagName("h1")[0].style.fontSize = valueHfs * widthH1 + "px" ;
	let i = 0;
	while ( i < 4 ) {
		document.getElementsByTagName("h2")[i].style.fontSize = valueHfs * 0.70 + "px" ;
		i = i + 1;
	};
	myTextarea();
};
// RESPONSIVE CALCULATION
function myCalculation ( X, Xa, Xb, Ya, Yb ) {
	if ( Xa !== Xb ) {
		if ( ( Xa < Xb ) && ( X <= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa < Xb ) && ( X >= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( Xa > Xb ) && ( X >= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa > Xb ) && ( X <= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( X > Xa && X < Xb ) || ( X > Xb && X < Xa ) ) {
			let Y = Number ( [ Yb * ( X - Xa ) + Ya * ( Xb - X ) ] / [ ( Xb - Xa ) ] );
			return Y;
		};
	} else {
		return false;
	};
};
// START
mySetting();
myResponsive();
window.addEventListener( "resize", myResponsive );
