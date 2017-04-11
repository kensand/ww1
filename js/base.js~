function addResizeEvent(func){
    var oldResize = window.onresize;
    window.onresize = function () {
        func();
        if (typeof oldResize === 'function') {
            oldResize();
        }
    };
}


function showElement(id, displayType){
	document.getElementById(id).style.display = displayType;
}

function mapFunction(container, element){
	hideChildren(container);
	showElement(element, "block");

}




/* 

MODAL

*/

document.addEventListener("DOMContentLoaded", function(event) {

        var content = document.getElementById("content");
        console.log(content);
        var modal = document.createElement("div");
        var modalContent = document.createElement("div");
        var close = document.createElement("span");
        var img = document.createElement("img");
        modalContent.id = "modalContent";
        img.id="modalImg";
        modal.id="modal";
        close.id="close";

        modalContent.appendChild(close);
        modalContent.appendChild(img);
        modal.appendChild(modalContent);
        
        content.parentNode.insertBefore(modal, content);

        close.onclick = function(event){
                var mod = document.getElementById("modal");
                
                mod.style.display = "none";
                
                window.onclick = null;
                
        }

        close.appendChild(document.createTextNode("X"));
        
        var imgs = document.getElementsByClassName("contentImg");//content.getElementsByTagName("img");
        for(var i = 0; i < imgs.length; i++){
                imgs[i].onclick = function(){
                        document.getElementById("modalImg").src = this.src;
                        document.getElementById("modal").style.display = "block";
                        window.onclick = function(event){
                                var mod = document.getElementById("modal");
                                if (event.target == mod) {
                                        mod.style.display = "none";
                                }
                                window.onclick = null;
                        }
			modal.onclick = function(e){
				
				var mod = document.getElementById("modal");
				if (e.target == mod) {
				//console.log(e.target == mod);
					mod.style.display = "none";
				}
			}
                        
                }

        }

});

