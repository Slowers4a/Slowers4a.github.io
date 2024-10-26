
var display = 0;

function lol() {
  if (display == 0) {
   document.getElementById('hasil').innerHTML = "Hallo"
   display = 1;
  } else {
     document.getElementById('hasil').innerHTML = ""
     display = 0;
   }
  
}