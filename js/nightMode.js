function nightMode(cb) {
  if(cb.checked == true){ //Change to dark
	//Change foreground
	document.getElementById("main-content").className =
 	document.getElementById("main-content").className.replace
    ( /(?:^|\s)mdl-color--white(?!\S)/g , '' )
    document.getElementById("main-content").className += " mdl-color--black";

    //Change background
    document.getElementById("main").style.background = "#000";

    //Change ribbon
    document.getElementById("ribbon").style.background = "#000";

	//Change text color
    document.getElementById("main-content").className =
 	document.getElementById("main-content").className.replace
    ( /(?:^|\s)mdl-color-text--grey-800(?!\S)/g , '' )
    document.getElementById("main-content").className += " mdl-color-text--grey-300";

    //Nav drawer background color
   	document.getElementById("drawer").style.background = "#000"

   	//Nav drawer text color
   	document.getElementById("drawer").className =
 	document.getElementById("drawer").className.replace
    ( /(?:^|\s)mdl-color-text--grey-800(?!\S)/g , '' )
    document.getElementById("drawer").className += " mdl-color-text--grey-300";
    
  } else {  //Change to light

   	//Change foreground
   	document.getElementById("main-content").className =
 	document.getElementById("main-content").className.replace
    ( /(?:^|\s)mdl-color--black(?!\S)/g , '' )
    document.getElementById("main-content").className += " mdl-color--white";

    //Change background
    document.getElementById("main").removeAttribute("style");

    //Restore ribbon
    document.getElementById("ribbon").style.background = "#37474F";

    //Change text color
    document.getElementById("main-content").className =
 	document.getElementById("main-content").className.replace
    ( /(?:^|\s)mdl-color-text--grey-300(?!\S)/g , '' )
    document.getElementById("main-content").className += " mdl-color-text--grey-800";

    //Nav drawer background color
    document.getElementById("drawer").style.background = "#fff"

    //Nav drawer text color
    document.getElementById("drawer").className =
 	document.getElementById("drawer").className.replace
    ( /(?:^|\s)mdl-color-text--grey-00(?!\S)/g , '' )
    document.getElementById("drawer").className += " mdl-color-text--grey-800";
  }
}