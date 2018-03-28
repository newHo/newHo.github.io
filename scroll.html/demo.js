(function(doc, win){
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docE1.clientWidth;
            if(!clientWidth) return;
            docE1.style.fontSize = 16 * (clientWidth / 375) + 'px';  
            console.log(clientWidth)          
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);