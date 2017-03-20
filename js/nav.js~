

document.addEventListener("DOMContentLoaded", function(event) {
    /*generate nav bar*/
    var nav = document.getElementById("nav");

    var button = document.createElement("button");
    button.id = "menuButton";
    button.className = "foreground";
    button.appendChild(document.createTextNode("Menu"));
    button.onclick= toggleMenu;
    nav.appendChild(button);
    var label = document.createElement("div");
    var h = document.createElement("h6");
    h.appendChild(document.createTextNode("Chapters"));
    label.id = "chapters";
    label.className = "navLabel";
    label.appendChild(h);

    var div = document.createElement("div");
    var logo = document.createElement("img");
    logo.id = "logo";
    div.onclick = function(){window.location = "../index.html";};//setAttribute("href", "../index.html");
    div.setAttribute("alt", "Home");
    div.setAttribute("title", "Home");
    div.id = "logodiv";
    logo.setAttribute("src", "../images/Websiteicon.svg");
    //logo.setAttribute("type", "image/svg+xml");
    div.appendChild(logo);
    nav.parentNode.insertBefore(div, nav);
    
    /*create Chapter container*/
    var chapcont = document.createElement("div");
    chapcont.id = "chapterContainer";

    var section;
    var chap;
    
    /*Chapter 1*/
    chap = document.createElement("div");
    chap.className = "navChapter";
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Chapter 1"));
    chap.appendChild(h);

    //Summary
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/summary.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Summary"));
    section.appendChild(h);
    chap.appendChild(section);
    

    //section 1
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/section1.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Section 1"));
    section.appendChild(h);
    chap.appendChild(section);

    //section 2
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/section2.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Section 2"));
    section.appendChild(h);
    chap.appendChild(section);

    //section 3
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/section3.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Section 3"));
    section.appendChild(h);
    chap.appendChild(section);

    //section 4
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/section4.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Section 4"));
    section.appendChild(h);
    chap.appendChild(section);

    //section 5
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/section5.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Section 5"));
    section.appendChild(h);
    chap.appendChild(section);

    //quiz
    section = document.createElement("div");
    section.className = "navSection"
    section.setAttribute("href", "../chapter1/quiz.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Quiz"));
    section.appendChild(h);
    chap.appendChild(section);


    chapcont.appendChild(chap);
    /*Chapter 2*/

    
    label.appendChild(chapcont);
    nav.appendChild(label);


    
    label = document.createElement("div");
    label.id = "About";
    label.className = "navLabel";
    label.setAttribute("href", "../chapter1/quiz.html");
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("About"));
    label.appendChild(h);
    nav.appendChild(label);
    
    label = document.createElement("div");
    label.id = "Media";
    label.className = "navLabel";
    h = document.createElement("h6");
    h.appendChild(document.createTextNode("Media"));
    label.appendChild(h);
    nav.appendChild(label);


    


    
    
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
	    if(window.innerWidth < 800){
		if(divs[i].style.display != "block"){
		    divs[i].style.display = "none";
		}
	    }
	    else{
		divs[i].style.display = "inline-block";	
	    }
	}
	if(window.innerWidth >= 800 && nav.style.display != "inline-block"){
	    nav.style.display = "inline-block";
	}
	else if(window.innerWidth < 800 && nav.style.display != "block"){
	    nav.style.display = "block";
	}/*
	   else if(window.innerWidth > 1400 && nav.style.display != "block"){
	   nav.style.display = "block";
	   }
	 */
	
    }
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

