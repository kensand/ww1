
document.addEventListener("DOMContentLoaded", function(event) {
   event.stopPropagation();
    function toggleMenu(){
	console.log("function call");
	var nav = document.getElementById("nav");
	var divs = nav.getElementsByClassName("navLabel");
	console.log(divs);
	document.getElementById("chapters").close();
	for(var i = 0; i < divs.length; i++){
	    //console.log(divs[i].style.display == "block");
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
	
	
	/*
	  if(nav.style.display == ""){
	    nav.style.display = "block";
	}
	else if(nav.style.display == "none"){
	    nav.style.display = "block";
	}
	else if(nav.style.display == "block"){
	    nav.style.display = "none";
	}*/
    }
    function navResize(){
	console.log("resize call");
	var nav = document.getElementById("nav");
	var divs = nav.getElementsByClassName("navLabel");
	for(var i = 0; i < divs.length; i++){
	    if(nav.clientWidth < 800){
		if(divs[i].style.display != "block"){
		    divs[i].style.display = "none";
		}
	    }
	    else{
		divs[i].style.display = "inline-block";	
	    }
	}
	if(nav.clientWidth > 800 && nav.style.display != "block"){
	    nav.style.display = "block";
	}/*
	else if(nav.clientWidth > 1400 && nav.style.display != "block"){
	    nav.style.display = "block";
	}
	    */
	    
    }
    document.getElementById("menuButton").onclick = toggleMenu;
    addResizeEvent(navResize);


    /*build ChapterLabel menu */
    var chapLabel = document.getElementById("chapters");
    chapLabel.state = 'Closed';

    
    chapLabel.close = function(){
	var chaps = document.getElementById("chapterContainer").getElementsByClassName("navChapter");
	for(var i = 0; i < chaps.length; i++){
	    chaps[i].close();
	    chaps[i].style.display = 'none';
	    
	}
	
	this.state='Closed';
    }

    
    chapLabel.open = function(){
	var chaps = document.getElementById("chapterContainer").getElementsByClassName("navChapter");
	for(var i = 0; i < chaps.length; i++){
	    chaps[i].style.display = 'block';
	    
	}
	this.state = 'Open';
    }

    /*build menu for each chapter in the ChapterLabel menu*/

    chapLabel.onclick = function(e){
	console.log('closing chaplabel');
	if(this.state == 'Open'){
	    this.close();
	}
	else{
	    this.open();
	}
	
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	return false;
    }
   
    
    var chaps = document.getElementById("chapterContainer").getElementsByClassName("navChapter");
    for(var i = 0; i < chaps.length; i++){
	chaps[i].state = "Closed";
	chaps[i].close = function(){
	    var sections = this.getElementsByClassName("navSection");
	    for(var j = 0; j < sections.length; j++){
		//console.log(sections);
		sections[j].style.display = "none";
	    }
	    this.state = "Closed";
	}

	chaps[i].open = function(){
	    //console.log('opening call');
	    var sections = this.getElementsByClassName("navSection");
	    for(var j = 0; j < sections.length; j++){
		//console.log(sections);
		sections[j].style.display = "block";
	    }
	    this.state = "Open";
	}
	chaps[i].onclick = function(e){
	    if(this.state == "Open"){
		//console.log('calling close');
		this.close();
	    }
	    else{
		var chaps = document.getElementById("chapters");
		chaps.close();
		chaps.open();
		this.open();
	    }
	    if (!e) var e = window.event;
	    e.cancelBubble = true;
	    if (e.stopPropagation) e.stopPropagation();
	    return false;
	}
	
	
	var sections = this.getElementsByClassName("navSection");
	for(var j = 0; j < sections.length; j++){
	    //console.log(sections);
	    sections[j].onclick = function(e){
		window.location = this.getAttribute('href');
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
		return false;
	    }
	}
    }
    
});

