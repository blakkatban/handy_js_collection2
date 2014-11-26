function ibus_jav_init(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg0,c){
	var drop_timer=arg0;
	var task_done_percent=c;
	
	HTMI = new Array();
	HTMI['photo_url_0']=arg1;
	HTMI['state']=arg2;
	HTMI['privacy']=arg3;
	HTMI['aboutme']=arg4;
	HTMI['status']=arg5;
	HTMI['country']=arg6;
	HTMI['show_age']=arg7;
	HTMI['title']=arg8;
	HTMI['month']=arg9;
	HTMI['c']=c;
	
	
	
	(function slider_countdown() {
	 if(drop_timer>0) {
	 drop_timer=drop_timer-1;
	 drawszlider(100, drop_timer);
	 if(task_done_percent="NaN"){task_done_percent=4;}
	 drawszZlider(100, task_done_percent);
	 
	 setTimeout(slider_countdown, 1750);
	 }
	 })();
	
	
	//alert("HELO"+arg1);
	var c=document.getElementById("charduk_error");
	//charduk_alert(c);
}






function charduk_alert(c){alert(c);}


function close_window() {if(confirm("Clicking OK will remove this image from your browser!  Are you absolutely sure you find this image objectionable?")){var ww=window.open("../login/flag_image.php","_self"); setTimeout(function(){var ww = window.open(window.location, '_self'); ww.close(); }, 1000);}}


		//sz

function drawszlider(ossz, meik){
    var szazalek=Math.round((meik*100)/ossz);
    document.getElementById("szliderbar").style.width=szazalek+'%';
    document.getElementById("szazalek").innerHTML=szazalek+'%';
}

		//szZ
		
function drawszZlider(osszZ, meikZ){
    var szZazalek=Math.round((meikZ*100)/osszZ);
    document.getElementById("szZliderbar").style.width=szZazalek+'%';
    document.getElementById("szZazalek").innerHTML=szZazalek+'%';
}


