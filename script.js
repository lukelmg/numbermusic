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
  var number = document.getElementById("mainInput").value;
  alert(number);
}

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        getNumber();
    }
});
