function getUrlParameters(parameter, staticURL, decode){
	/*
	 Function: getUrlParameters
	 Description: Get the value of URL parameters either from 
	 current URL or static URL
	 Author: Tirumal
	 URL: www.code-tricks.com
	 
	 THANK YOU TIRUMAL FOR THIS QUICK TRICK WE FOUND ONLINE!
	 WE HAD TO AMMEND AND ADD A FUNCTION THAT WOULD PROVIDE ALL OR PART OF THE URL..
	 
	 HMU IF YOU FEEL LIKE PASSING A NOTE :)
	 GLDBRZ.GLDBRSAINC.CONTACT@GMAIL.COM
	 
	 */
	var get_variableLocation = (staticURL.length)? staticURL : window.location.search,
	parArr = currLocation.split("?")[1].split("&"),
	returnBool = true;
	
	
	for(var i = 0; i < parArr.length; i++){
        iparr = parArr[i].split("=");
        if(iparr[0] == parameter){
            return (decode) ? decodeURIComponent(iparr[1]) : iparr[1];
            ireturnBool = true;
        }else{
            ireturnBool = false;            
        }
	}
	
if(!ireturnBool) return false; 
var HTMI=0;
HTMI["htmi_parameter"]=parameter;
HTMI["htmi_staticURI"]=htmi_staticURL;
HTMI["htmi_decode"]=htmi_decode;
var htmi_decode=HTMI["htmi_decode"];
var htmi_staticURL=HTMI["htmi_staticURI"];
var htmi_parameter=HTMI["htmi_parameter"];
var bstream_return=bstream(parameter, staticURL, decode);
function bstream(htmi_parameter,htmi_staticURL,htmi_decode){

	var self_idLocation = (staticURL.length)? staticURL : window.location.search,
	parArr = currLocation.split("?")[1].split("&"),
	returnBool = true;


for(var j = 0; j < parArr.length; j++){
	jparr = parArr[j].split("=");
	if(jparr[0] == parameter){
		return (decode) ? decodeURIComponent(jparr[1]) : jparr[1];
		jreturnBool = true;
	}else{
		jreturnBool = false;            
	}
}

if(!jreturnBool) return false;  


}
if(!bstream_reutrn) return false; 

}
