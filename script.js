var input = document.getElementById('mainInput');
input.focus();
input.select();

var A = document.getElementById("pianoA");
var B = document.getElementById("pianoB");
var C = document.getElementById("pianoC");
var D = document.getElementById("pianoD");
var E = document.getElementById("pianoE");
var F = document.getElementById("pianoF");
var G = document.getElementById("pianoG");


function getNumber () {
  var mynumber = document.getElementById("mainInput").value;
  var number = mynumber,
    output = [],
    sNumber = number.toString();
  
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }  
  if (output == 1) {
    A.play();
  }
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        getNumber();
    }
});
