/*
 * Version: 2.1.2
 */

// Notify Plugin - Code for the demo site of HtmlCoder
// You can delete the code below
//-----------------------------------------------
(function($) {
	"use strict";
	$(document).ready(function() {
		if (($(".main-navigation.onclick").length>0) && $(window).width() > 991 ){
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			});
		};
		if (!($(".main-navigation.animated").length>0) && $(window).width() > 991 && $(".main-navigation").length>0){
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only
		};
	}); // End document ready
})(jQuery);

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Oct 04, 2025 16:00:00").getTime();

// Setup Timer to tick every 1 second
let inicio = setTimeout(tick, 1000);
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Set time on document
    document.querySelector('.countdown2').innerText = time;
  }
}

var map_church = document.getElementById ('mymap_church'); 
var maplistner = function (e) { 
    var frame = document.createElement ('iframe'); 
    frame.src = this.getAttribute ('data-src'); 
    map_church.appendChild (frame); 
    map_church.removeEventListener ("mouseover", maplistner); 
}; 
map_church.addEventListener ('mouseover', maplistner);

var map_salon = document.getElementById ('mymap_salon'); 
var maplistners = function (e) { 
    var framed = document.createElement ('iframe'); 
    framed.src = this.getAttribute ('data-src'); 
    map_salon.appendChild (framed); 
    map_salon.removeEventListener ("mouseover", maplistners); 
}; 
map_salon.addEventListener ('mouseover', maplistners);

var boton = document.getElementById("boton");
let v = document.getElementsByTagName("audio")[0];
var reproductor = document.getElementById("reproductor");
var sound = false;

boton.addEventListener("click", function(){
	if (!sound) {
		console.log("Prendido");
		v.play();
		reproductor.classList.replace("fa-volume-up","fa-volume-off");
		sound = true;
    v.volume ="0.4"; 
		} else {
			console.log("Apagado");
			v.pause();
			reproductor.classList.replace("fa-volume-off","fa-volume-up");
			sound = false;
			} 
    });

      // Música
      /*
    let boton = document.querySelector(".reproductor");
    let audioEtiqueta = document.querySelector("audio");


    window.addEventListener("mouseover", () => {
        audioEtiqueta.setAttribute("src", "images/cancion.mp3")
        audioEtiqueta.play()
        audioEtiqueta.volume =0.5;
    }, {once : true});
    */
    
    /*
      boton.addEventListener('mouseover', () => {
        if (statusMouse.innerHTML==="Desactivado"){
          audioEtiqueta.setAttribute("src", "images/cancion.mp3")
          audioEtiqueta.play()
          audioEtiqueta.volume =0.5;
          statusMouse.innerHTML="UsoMouse";
          console.log(statusMouse.innerHTML);
        }
      }, {once : true});
    */

    



    

    
