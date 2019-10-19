var input = document.getElementById('mainInput');
input.focus();
input.select();


var note1;
var note2;

function getNumber () {
  var mynumber = document.getElementById("mainInput").value;
  var length = mynumber.toString().length;
  length = length - 1;
  var number = mynumber,
    output = [],
    sNumber = number.toString();
  
  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }  
  
  note1 = output[length - length];
  var note2 = output[length - length + 1];
  var note3 = output[length - length + 2];
  var note4 = output[length - length + 3];
  var note5 = output[length - length + 4];
  var note6 = output[length - length + 5];
  var note7 = output[length - length + 6];
  var note8 = output[length - length + 7];
  var note9 = output[length - length + 8];
  var note10 = output[length - length + 9];
  
  //alert(note1);
  
  playNotes();
  
}

function playNotes() {
  
  var A = document.getElementById("pianoA");
var B = document.getElementById("pianoB");
var C = document.getElementById("pianoC");
var D = document.getElementById("pianoD");
var E = document.getElementById("pianoE");
var F = document.getElementById("pianoF");
var G = document.getElementById("pianoG");
  
  if (note1 == 0) {
    A.play();
  } else {
    if (note1 == 1) {
      B.play();
    }
  }
 
}


$(document).on('keypress',function(e) {
    if(e.which == 13) {
        getNumber();
    }
});
