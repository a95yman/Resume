var pages = document.getElementsByClassName("paper");
for(var i=1; i<pages.length; i++){
    pages[i].style.marginTop="30px";
}
var width;
var wrapper = document.getElementById("wrapper");
function init(){
    width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    if(width>screen.width)
        width=screen.width-20;
    wrapper.style.width=width+"px";
}
init();
window.addEventListener("resize", function(){
    init();
}, true);