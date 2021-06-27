
// Horizontal Scrolling Using Mouse Wheel
// Code From: www.dte.web.id/2013/02/event-mouse-wheel.html
(function() {
function scrollHorizontally(e) {
e = window.event || e;
var delta = Math.max(-0.5, Math.min(0.5, (e.wheelDelta || -e.detail)));
document.documentElement.scrollLeft -= (delta*50); // Multiplied by 40
document.body.scrollLeft -= (delta*50); // Multiplied by 40
e.preventDefault();
}
if (window.addEventListener) {
// IE9, Chrome, Safari, Opera
window.addEventListener("mousewheel", scrollHorizontally, false);
// Firefox
window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
// IE 6/7/8
window.attachEvent("onmousewheel", scrollHorizontally);
}
})();

document.getElementById( "HighFidelity" ).onclick= function(){
document.getElementById('HighFidelitysound').play();
};
document.getElementById( "HighFidelity" ).ontouchstart = function(){
document.getElementById('HighFidelitysound').play();
};

//PupulaDuplex
document.getElementById( "PupulaDuplex" ).onclick= function(){
document.getElementById('PupulaDuplexsound').play();
};
document.getElementById( "PupulaDuplex" ).ontouchstart = function(){
document.getElementById('PupulaDuplexsound').play();
};

//TheArchitectureoftheSky
document.getElementById( "TheArchitectureoftheSky" ).onclick= function(){
document.getElementById('TheArchitectureoftheSkysound').play();
};
document.getElementById( "TheArchitectureoftheSky" ).ontouchstart = function(){
document.getElementById('TheArchitectureoftheSkysound').play();
};

