// function darkmode(){
//   let darkModeContainer = document.querySelector(".container"); varible1.classList.toggle("darkmodeContainer");
//
// }

function tree() {
        var audio = document.getElementById("tree");
        audio.play();
      }

function music() {
        var audio = document.getElementById("music");
        audio.play();
      }
//
// function rain() {
//         var audio = document.getElementById("rain");
//         audio.play();
//       }
//
// function running() {
//         var audio = document.getElementById("running");
//         audio.play();
//       }
//
// function talking() {
//         var audio = document.getElementById("talking");
//         audio.play();
//       }
//
// function walking() {
//         var audio = document.getElementById("walking");
//         audio.play();
//       }
//
// function water() {
//         var audio = document.getElementById("water");
//         audio.play();
//       }
//
// function wind() {
//         var audio = document.getElementById("wind");
//         audio.play();
//       }
//
// function construction1() {
//         var audio = document.getElementById("construction1");
//         audio.play();
//       }
//
// function construction2() {
//         var audio = document.getElementById("construction2");
//         audio.play();
//       }
//
// function boat() {
//         var audio = document.getElementById("boat");
//         audio.play();
//       }
//
// function car() {
//         var audio = document.getElementById("car");
//         audio.play();
//       }
//
// function animal_2leg() {
//         var audio = document.getElementById("animal_2leg");
//         audio.play();
//       }
//
// function animal_4leg() {
//         var audio = document.getElementById("animal_4leg");
//         audio.play();
//       }
//
// function bike-scooter() {
//         var audio = document.getElementById("bike-scooter");
//         audio.play();
//       }
//
// function bike-scooter() {
//         var audio = document.getElementById("bike-scooter1");
//         audio.play();
//       }
//
// function siren() {
//         var audio = document.getElementById("siren");
//         audio.play();
//       }


// dragElement(document.getElementById("treediv"))
//
// dragElement(elmnt){
//   var pos1=0, pos2=0, pos3=0, pos4=0;
//   if (document.getElementById(elmnt.id+"header")){
//     //if present, the header is where you move the DIV from:
//     document.getElementById(elmt.id+"header").onmousedown=dragMouseDown;
//   } else {
//     //otherwise, move the DIV from anywhere inside the DIV:
//     elmt.onmousedown=dragMouseDown;
//   }
//
// function dragMouseDown(e) {
//   e=e || window.event;
//   e.preventDefault();
//   //get the mouse cursor position at startup:
//   pos3=e.clientX;
//   pos4=e.clientY;
//   document.onmouseup=closeDragElement;
//   //call a function whenever the cursor moves:
//   document.onmousemove=elementDrag;
// }
//
// function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }
//
//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
