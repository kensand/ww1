(function (window, undefined) {
    if(!jQuery.browser.msie || (jQuery.browser.msie && (jQuery.browser.version>8))){
        window.jimUtil.fitted = true;
        window.jimUtil.scale = 100;
        window.jimUtil.modelWidth = 400;
    }
    jQuery(window)
        .bind("orientationchange", function() {
            setPageSize();
           })
        .bind("loadcomponent", function(event) {
            setPageSize();
        })
        .bind("resize", function() {
            setPageSize();
            if (jimUtil.fitted) {
                jimUtil.fitToScreen();
                jimUtil.refreshPageMinSize();
            }
        });
    function setPageSize(){
        if (navigator.userAgent.indexOf('MSIE')!=-1 && jQuery('#zoomDiv').length>0) {
           if(jQuery('#boundingDiv').length<=0){
             jQuery('#zoomDiv').wrap(jQuery('<div id="boundingDiv"/>'));
           }   
           var parent = window;
           if(jQuery('#jim-container').length>0){
                parent = '#jim-container';
           }
           jQuery('#boundingDiv').css({
                'width':jQuery(parent).width()>(jQuery('#alignmentBox').width()*(1/(100/jimUtil.scale))) ? jQuery(parent).width() : jQuery('#alignmentBox').width()*(1/(100/jimUtil.scale)),
                'height':jQuery(parent).height()>(jQuery('#alignmentBox').height()*(1/(100/jimUtil.scale))) ? jQuery(parent).height() : jQuery('#alignmentBox').height()*(1/(100/jimUtil.scale)),
                'overflow':'hidden',
                'position':'absolute'
            });
        }
    }       
})(window);