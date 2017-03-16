function addResizeEvent(func){
    var oldResize = window.onresize;
    window.onresize = function () {
        func();
        if (typeof oldResize === 'function') {
            oldResize();
        }
    };
}

