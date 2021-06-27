
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

//high fidelity
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

//Pod
document.getElementById( "Pod" ).onclick= function(){
document.getElementById('Podsound').play();
};
document.getElementById( "Pod" ).ontouchstart = function(){
document.getElementById('Podsound').play();
};

//Hypnogogicstate
document.getElementById( "Hypnogogicstate" ).onclick= function(){
document.getElementById('Hypnogogicstatesound').play();
};
document.getElementById( "Hypnogogicstate" ).ontouchstart = function(){
document.getElementById('Hypnogogicstatesound').play();
};

//MythsoftheNearFuture
document.getElementById( "MythsoftheNearFuture" ).onclick= function(){
document.getElementById('MythsoftheNearFuturesound').play();
};
document.getElementById( "MythsoftheNearFuture" ).ontouchstart = function(){
document.getElementById('MythsoftheNearFuture').play();
};

//Thepoeticsofspace
document.getElementById( "Thepoeticsofspace" ).onclick= function(){
document.getElementById('Thepoeticsofspacesound').play();
};
document.getElementById( "Thepoeticsofspace" ).ontouchstart = function(){
document.getElementById('Thepoeticsofspacesound').play();
};

//Eclipse
document.getElementById( "Eclipse" ).onclick= function(){
document.getElementById('Eclipsesound').play();
};
document.getElementById( "Eclipse" ).ontouchstart = function(){
document.getElementById('Eclipsesound').play();
};

//Necropolis
document.getElementById( "Necropolis" ).onclick= function(){
document.getElementById('Necropolissound').play();
};
document.getElementById( "Necropolis" ).ontouchstart = function(){
document.getElementById('Necropolissound').play();
};

//adiscreetprosthesis
document.getElementById( "adiscreetprosthesis" ).onclick= function(){
document.getElementById('adiscreetprosthesissound').play();
};
document.getElementById( "adiscreetprosthesis" ).ontouchstart = function(){
document.getElementById('adiscreetprosthesissound').play();
};

//PodII
document.getElementById( "PodII" ).onclick= function(){
document.getElementById('PodIIsound').play();
};
document.getElementById( "PodII" ).ontouchstart = function(){
document.getElementById('PodIIsound').play();
};

//Digitalangel
document.getElementById( "Digitalangel" ).onclick= function(){
document.getElementById('Digitalangelsound').play();
};
document.getElementById( "Digitalangel" ).ontouchstart = function(){
document.getElementById('Digitalangelsound').play();
};

//CompulsoryGames
document.getElementById( "CompulsoryGames" ).onclick= function(){
document.getElementById('CompulsoryGamessound').play();
};
document.getElementById( "CompulsoryGames" ).ontouchstart = function(){
document.getElementById('CompulsoryGamessound').play();
};

//ElevatedSection
document.getElementById( "ElevatedSection" ).onclick= function(){
document.getElementById('ElevatedSectionsound').play();
};
document.getElementById( "ElevatedSection" ).ontouchstart = function(){
document.getElementById('ElevatedSectionsound').play();
};

//Nightschool
document.getElementById( "Nightschool" ).onclick= function(){
document.getElementById('Nightschoolsound').play();
};
document.getElementById( "PupulaDuplex" ).ontouchstart = function(){
document.getElementById('PupulaDuplexsound').play();
};

//BunkerHill
document.getElementById( "BunkerHill" ).onclick= function(){
document.getElementById('BunkerHillsound').play();
};
document.getElementById( "BunkerHill" ).ontouchstart = function(){
document.getElementById('BunkerHillsound').play();
};

//PodIII
document.getElementById( "PodIII" ).onclick= function(){
document.getElementById('PodIIIsound').play();
};
document.getElementById( "PodIII" ).ontouchstart = function(){
document.getElementById('PodIIIsound').play();
};

//MimeticDesires
document.getElementById( "MimeticDesires" ).onclick= function(){
document.getElementById('MimeticDesiressound').play();
};
document.getElementById( "MimeticDesires" ).ontouchstart = function(){
document.getElementById('MimeticDesiressound').play();
};

//Cyberiad
document.getElementById( "Cyberiad" ).onclick= function(){
document.getElementById('Cyberiadsound').play();
};
document.getElementById( "Cyberiad" ).ontouchstart = function(){
document.getElementById('Cyberiadsound').play();
};

//EventHorizon
document.getElementById( "EventHorizon" ).onclick= function(){
document.getElementById('EventHorizonsound').play();
};
document.getElementById( "PupulaDuplex" ).ontouchstart = function(){
document.getElementById('PupulaDuplexsound').play();
};

//CodedSleep
document.getElementById( "CodedSleep" ).onclick= function(){
document.getElementById('CodedSleepsound').play();
};
document.getElementById( "CodedSleep" ).ontouchstart = function(){
document.getElementById('CodedSleepsound').play();
};

//TheArchitectureoftheSky
document.getElementById( "TheArchitectureoftheSky" ).onclick= function(){
document.getElementById('TheArchitectureoftheSkysound').play();
};
document.getElementById( "TheArchitectureoftheSky" ).ontouchstart = function(){
document.getElementById('TheArchitectureoftheSkysound').play();
};
