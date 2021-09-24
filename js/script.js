
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



//flexbox 1 event listeners

//high fidelity
document.getElementById( "HighFidelity" ).onclick= function(){
document.getElementById('HighFidelitysound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "High Fidelity <br> 17.5 x 16 cm";
};
document.getElementById( "HighFidelity" ).ontouchstart = function(){
document.getElementById('HighFidelitysound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "High Fidelity <br> 17.5 x 16 cm";
};

//PupulaDuplex
document.getElementById( "PupulaDuplex" ).onclick= function(){
document.getElementById('PupulaDuplexsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pupula Duplex <br> 8.5 x 6.5 cm";
};
document.getElementById( "PupulaDuplex" ).ontouchstart = function(){
document.getElementById('PupulaDuplexsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pupula Duplex <br> 8.5 x 6.5 cm";
};

//Pod
document.getElementById( "Pod" ).onclick= function(){
document.getElementById('Podsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pod <br> 15.5 x 20 cm";
};
document.getElementById( "Pod" ).ontouchstart = function(){
document.getElementById('Podsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pod <br> 15.5 x 20 cm";
};

//Hypnogogicstate
document.getElementById( "Hypnogogicstate" ).onclick= function(){
document.getElementById('Hypnogogicstatesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Hypnogogic State <br> 17.5 x 13 cm";
};
document.getElementById( "Hypnogogicstate" ).ontouchstart = function(){
document.getElementById('Hypnogogicstatesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Hypnogogic State <br> 17.5 x 13 cm";
};

//MythsoftheNearFuture
document.getElementById( "MythsoftheNearFuture" ).onclick= function(){
document.getElementById('MythsoftheNearFuturesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Myths of the Near Future <br> 16 x 21 cm";
};
document.getElementById( "MythsoftheNearFuture" ).ontouchstart = function(){
document.getElementById('MythsoftheNearFuture').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Myths of the Near Future <br> 16 x 21 cm";
};

//Thepoeticsofspace
document.getElementById( "Thepoeticsofspace" ).onclick= function(){
document.getElementById('Thepoeticsofspacesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Poetics of Space <br> 10.5 x 15 cm";
};
document.getElementById( "Thepoeticsofspace" ).ontouchstart = function(){
document.getElementById('Thepoeticsofspacesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Poetics of Space <br> 10.5 x 15 cm";
};

//Eclipse
document.getElementById( "Eclipse" ).onclick= function(){
document.getElementById('Eclipsesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Eclipse <br> 8.5 x 8.5 cm";
};
document.getElementById( "Eclipse" ).ontouchstart = function(){
document.getElementById('Eclipsesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Eclipse <br> 8.5 x 8.5 cm";
};

//Necropolis
document.getElementById( "Necropolis" ).onclick= function(){
document.getElementById('Necropolissound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Necropolis <br> 14 x 13 cm";
};
document.getElementById( "Necropolis" ).ontouchstart = function(){
document.getElementById('Necropolissound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Necropolis <br> 14 x 13 cm";
};

//adiscreetprosthesis
document.getElementById( "adiscreetprosthesis" ).onclick= function(){
document.getElementById('adiscreetprosthesissound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "A Discreet Prosthesis <br> 20 x 14 cm";
};
document.getElementById( "adiscreetprosthesis" ).ontouchstart = function(){
document.getElementById('adiscreetprosthesissound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "A Discreet Prosthesis <br> 20 x 14 cm";
};

//PodII
document.getElementById( "PodII" ).onclick= function(){
document.getElementById('PodIIsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pod II <br> 11.5 x 10.5 cm";
};
document.getElementById( "PodII" ).ontouchstart = function(){
document.getElementById('PodIIsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pod II <br> 11.5 x 10.5 cm";
};

//Digitalangel
document.getElementById( "Digitalangel" ).onclick= function(){
document.getElementById('Digitalangelsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Digital Angel <br> 7.5 x 12 cm";
};
document.getElementById( "Digitalangel" ).ontouchstart = function(){
document.getElementById('Digitalangelsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Digital Angel <br> 7.5 x 12 cm";
};

//CompulsoryGames
document.getElementById( "CompulsoryGames" ).onclick= function(){
document.getElementById('CompulsoryGamessound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Compulsory Games <br> 15 x 13 cm";
};
document.getElementById( "CompulsoryGames" ).ontouchstart = function(){
document.getElementById('CompulsoryGamessound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Compulsory Games <br> 15 x 13 cm";
};

//ElevatedSection
document.getElementById( "ElevatedSection" ).onclick= function(){
document.getElementById('ElevatedSectionsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Elevated Section <br> 12 x 11.5 cm";
};
document.getElementById( "ElevatedSection" ).ontouchstart = function(){
document.getElementById('ElevatedSectionsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Elevated Section <br> 12 x 11.5 cm";
};

//Nightschool
document.getElementById( "Nightschool" ).onclick= function(){
document.getElementById('Nightschoolsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Night School <br> 16.5 x 17 cm";
};
document.getElementById( "PupulaDuplex" ).ontouchstart = function(){
document.getElementById('PupulaDuplexsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Night School <br> 16.5 x 17 cm";
};

//BunkerHill
document.getElementById( "BunkerHill" ).onclick= function(){
document.getElementById('BunkerHillsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Bunker Hill <br> 23 x 18 cm";
};
document.getElementById( "BunkerHill" ).ontouchstart = function(){
document.getElementById('BunkerHillsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Bunker Hill <br> 23 x 18 cm";
};

//PodIII
document.getElementById( "PodIII" ).onclick= function(){
document.getElementById('PodIIIsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pod III <br> 9 x 10.5 cm";
};
document.getElementById( "PodIII" ).ontouchstart = function(){
document.getElementById('PodIIIsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pod III <br> 9 x 10.5 cm";
};

//MimeticDesires
document.getElementById( "MimeticDesires" ).onclick= function(){
document.getElementById('MimeticDesiressound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Mimetic Desires <br> 16 x 12 cm";
};
document.getElementById( "MimeticDesires" ).ontouchstart = function(){
document.getElementById('MimeticDesiressound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Mimetic Desires <br> 16 x 12 cm";
};

//Cyberiad
document.getElementById( "Cyberiad" ).onclick= function(){
document.getElementById('Cyberiadsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Cyberiad <br> 13 x 13 cm";
};
document.getElementById( "Cyberiad" ).ontouchstart = function(){
document.getElementById('Cyberiadsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Cyberiad <br> 13 x 13 cm";
};

//EventHorizon
document.getElementById( "EventHorizon" ).onclick= function(){
document.getElementById('EventHorizonsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Event Horizon <br> 13.5 x 13.5 cm";
};
document.getElementById( "PupulaDuplex" ).ontouchstart = function(){
document.getElementById('PupulaDuplexsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Event Horizon <br> 13.5 x 13.5 cm";
};

//CodedSleep
document.getElementById( "CodedSleep" ).onclick= function(){
document.getElementById('CodedSleepsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Coded Sleep <br> 11 x 8.5 cm";
};
document.getElementById( "CodedSleep" ).ontouchstart = function(){
document.getElementById('CodedSleepsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Coded Sleep <br> 11 x 8.5 cm";
};

//Arachne
document.getElementById( "Arachne" ).onclick= function(){
document.getElementById('Arachnesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Arachne <br> 11.5 x 13 cm";
};
document.getElementById( "Arachne" ).ontouchstart = function(){
document.getElementById('Arachnesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Arachne <br> 11.5 x 13 cm";
};

//PatternRecognition
document.getElementById( "PatternRecognition" ).onclick= function(){
document.getElementById('PatternRecognitionsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pattern Recognition <br> 13 x 13.5 cm";
};
document.getElementById( "PatternRecognition" ).ontouchstart = function(){
document.getElementById('PatternRecognitionsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Pattern Recognition <br> 13 x 13.5 cm";
};

//SlowCancellation
document.getElementById( "SlowCancellation" ).onclick= function(){
document.getElementById('SlowCancellationsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Slow Cancellation of the Future <br> 10 x 15 cm";
};
document.getElementById( "SlowCancellation" ).ontouchstart = function(){
document.getElementById('SlowCancellationsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Slow Cancellation of the Future <br> 10 x 15 cm";
};



//flexbox 2 event listeners

//Prometheos
document.getElementById( "Prometheos" ).onclick= function(){
document.getElementById('Prometheossound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Prometheos <br> 16.5 x 12 cm";
};
document.getElementById( "Prometheos" ).ontouchstart = function(){
document.getElementById('Prometheossound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Prometheos <br> 16.5 x 12 cm";
};

//SentientTumor
document.getElementById( "SentientTumor" ).onclick= function(){
document.getElementById('SentientTumorsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Sentient Tumor <br> 13.5 x 15.5 cm";
};
document.getElementById( "SentientTumor" ).ontouchstart = function(){
document.getElementById('SentientTumorsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Sentient Tumor <br> 13.5 x 15.5 cm";
};

//TheArchitectureoftheSky
document.getElementById( "TheArchitectureoftheSky" ).onclick= function(){
document.getElementById('TheArchitectureoftheSkysound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Architecture of the Sky <br> 22.5 x 17 cm";
};
document.getElementById( "TheArchitectureoftheSky" ).ontouchstart = function(){
document.getElementById('TheArchitectureoftheSkysound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Architecture of the Sky <br> 22.5 x 17 cm";
};

//Trypophobia
document.getElementById( "Trypophobia" ).onclick= function(){
document.getElementById('Trypophobiasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Trypophobia <br> 17 x 13 cm";
};
document.getElementById( "Trypophobia" ).ontouchstart = function(){
document.getElementById('Trypophobiasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Trypophobia <br> 17 x 13 cm";
};

//Uncannyvalley
document.getElementById( "Uncannyvalley" ).onclick= function(){
document.getElementById('Uncannyvalleysound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Uncanny Valley <br> 17.5 x 13.5 cm";
};
document.getElementById( "Uncannyvalley" ).ontouchstart = function(){
document.getElementById('Uncannyvalleysound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Uncanny Valley <br> 17.5 x 13.5 cm";
};

//Revolutionforthedead
document.getElementById( "Revolutionforthedead" ).onclick= function(){
document.getElementById('Revolutionforthedeadsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Revolution for the Dead <br> 13.5 x 16.5 cm";
};
document.getElementById( "Revolutionforthedead" ).ontouchstart = function(){
document.getElementById('Revolutionforthedeadsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Revolution for the Dead <br> 13.5 x 16.5 cm";
};

//Cosmophobia
document.getElementById( "Cosmophobia" ).onclick= function(){
document.getElementById('Cosmophobiasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Cosmophobia <br> 20 x 13 cm";
};
document.getElementById( "Cosmophobia" ).ontouchstart = function(){
document.getElementById('Cosmophobiasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Cosmophobia <br> 20 x 13 cm";
};

//FilthyMagic
document.getElementById( "FilthyMagic" ).onclick= function(){
document.getElementById('FilthyMagicsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Filthy Magic <br> 16 x 10 cm";
};
document.getElementById( "FilthyMagic" ).ontouchstart = function(){
document.getElementById('FilthyMagicsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Filthy Magic <br> 16 x 10 cm";
};

//DigitalPathologies
document.getElementById( "DigitalPathologies" ).onclick= function(){
document.getElementById('DigitalPathologiessound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Digital Pathologies <br> 16 x 16.5 cm";
};
document.getElementById( "DigitalPathologies" ).ontouchstart = function(){
document.getElementById('DigitalPathologiessound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Digital Pathologies <br> 16 x 16.5 cm";
};

//ExtremeMetaphors
document.getElementById( "ExtremeMetaphors" ).onclick= function(){
document.getElementById('ExtremeMetaphorssound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Extreme Metaphors <br> 11 x 17 cm";
};
document.getElementById( "ExtremeMetaphors" ).ontouchstart = function(){
document.getElementById('ExtremeMetaphorssound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Extreme Metaphors <br> 11 x 17 cm";
};

//Memoriesofthefuture
document.getElementById( "Memoriesofthefuture" ).onclick= function(){
document.getElementById('Memoriesofthefuturesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Memories of the Future <br> 23 x 15 cm";
};
document.getElementById( "Memoriesofthefuture" ).ontouchstart = function(){
document.getElementById('Memoriesofthefuturesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Memories of the Future <br> 23 x 15 cm";
};

//Isopoda
document.getElementById( "Isopoda" ).onclick= function(){
document.getElementById('Isopodasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Isopoda <br> 10 x 14 cm";
};
document.getElementById( "Isopoda" ).ontouchstart = function(){
document.getElementById('Isopodasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "isopoda <br> 10 x 14 cm";
};

//TheNewEros
document.getElementById( "TheNewEros" ).onclick= function(){
document.getElementById('TheNewErossound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The New Eros <br> 6.5 x 5 cm";
};
document.getElementById( "TheNewEros" ).ontouchstart = function(){
document.getElementById('TheNewErossound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The New Eros <br> 6.5 x 5 cm";
};

//TheAviatrix
document.getElementById( "TheAviatrix" ).onclick= function(){
document.getElementById('TheAviatrixsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Aviatrix <br> 14 x 14.5 cm";
};
document.getElementById( "TheAviatrix" ).ontouchstart = function(){
document.getElementById('TheAviatrixsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Aviatrix <br> 14 x 14.5 cm";
};

//Thelasttransitofvenus
document.getElementById( "Thelasttransitofvenus" ).onclick= function(){
document.getElementById('Thelasttransitofvenussound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Last Transit of Venus <br> 12 x 12 cm";
};
document.getElementById( "Thelasttransitofvenus" ).ontouchstart = function(){
document.getElementById('Thelasttransitofvenussound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Last Transit of Venus <br> 12 x 12 cm";
};

//SongsofInnocence
document.getElementById( "SongsofInnocence" ).onclick= function(){
document.getElementById('SongsofInnocencesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Songs of Innocence <br> 11 x 9.5 cm";
};
document.getElementById( "SongsofInnocence" ).ontouchstart = function(){
document.getElementById('SongsofInnocencesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Songs of Innocence <br> 11 x 9.5 cm";
};

//TheThoughtCollective
document.getElementById( "TheThoughtCollective" ).onclick= function(){
document.getElementById('TheThoughtCollectivesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Thought Collective <br> 20 x 14 cm";
};
document.getElementById( "TheThoughtCollective" ).ontouchstart = function(){
document.getElementById('TheThoughtCollectivesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Thought Collective <br> 20 x 14 cm";
};

//TheSchedule
document.getElementById( "TheSchedule" ).onclick= function(){
document.getElementById('TheSchedulesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Schedule of Addiction <br> 23 x 13.5 cm";
};
document.getElementById( "TheSchedule" ).ontouchstart = function(){
document.getElementById('TheSchedulesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Schedule of Addiction <br> 23 x 13.5 cm";
};

//CrisisCult
document.getElementById( "CrisisCult" ).onclick= function(){
document.getElementById('CrisisCultsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Crisis Cult <br> 23 x 11 cm";
};
document.getElementById( "CrisisCult" ).ontouchstart = function(){
document.getElementById('CrisisCultsound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Crisis Cult <br> 23 x 11 cm";
};

//DarkEuphoria
document.getElementById( "DarkEuphoria" ).onclick= function(){
document.getElementById('DarkEuphoriasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Dark Euphoria <br> 19.5 x 12.5 cm";
};
document.getElementById( "DarkEuphoria" ).ontouchstart = function(){
document.getElementById('DarkEuphoriasound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "Dark Euphoria <br> 19.5 x 12.5 cm";
};

//ladyLake
document.getElementById( "LadyLake" ).onclick= function(){
document.getElementById('LadyLakesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Lady of the Lake <br> 10.5 x 11 cm";
};
document.getElementById( "LadyLake" ).ontouchstart = function(){
document.getElementById('LadyLakesound').play();
let str = document.getElementById("description").innerHTML;
document.getElementById("description").innerHTML =  "The Lady of the lake <br> 10.5 x 11 cm";
};
