document.addEventListener("DOMContentLoaded", function(event){
    var footer = document.getElementById("footer");
    footer.appendChild(document.createElement("br"));
    footer.appendChild(document.createElement("hr"));
    var p = document.createElement("p");
    p.appendChild(document.createTextNode("Copyright 2017 Jacob Stephens, Kenneth Sanders, Aliyu B. Zakari"));
    footer.appendChild(p);
});
