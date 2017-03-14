
document.addEventListener("DOMContentLoaded", function(event) { 
    function toggleMenu(){
    console.log("function call");
    var divs = document.getElementById("nav").getElementsByTagName("div");
    console.log(divs);
    for(var i = 0; i < divs.length; i++){
	console.log(divs[i].style.display == "block");
	if(divs[i].style.display == ""){
	    divs[i].style.display = "block";
	}
	else if(divs[i].style.display == "none"){
	    divs[i].style.display = "block";
	}
	else if(divs[i].style.display == "block"){
	    divs[i].style.display = "none";
	}
    }
    }
    function navResize(){
	console.log("resize call");
	var nav = document.getElementById("nav");
	var divs = nav.getElementsByTagName("div");
	for(var i = 0; i < divs.length; i++){
	    if(nav.clientWidth < 1400){
		if(divs[i].style.display != "block"){
		    divs[i].style.display = "none";
		}
	    }
	    else{
		divs[i].style.display = "inline-block";	
	    }
	}
    }
    document.getElementById("menuButton").onclick = toggleMenu;
    window.onresize = navResize;
});
