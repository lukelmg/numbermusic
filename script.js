var input = document.getElementById("mainInput");
input.focus();
input.select();

var timeBetween = 400;

var A = document.getElementById("pianoA");
var B = document.getElementById("pianoB");
var C = document.getElementById("pianoC");
var D = document.getElementById("pianoD");
var E = document.getElementById("pianoE");
var F = document.getElementById("pianoF");
var G = document.getElementById("pianoG");

var note1;
var note2;
var note3;
var note4;
var note5;
var note6;
var note7;
var note8;
var note9;
var note10;

var noteA = [1, 8];
var noteB = [2, 9];
var noteC = [3, 0];
var noteD = 4;
var noteE = 5;
var noteF = 6;
var noteG = 7;

var lengthcount = 0;

function getNumber() {
  var mynumber = document.getElementById("mainInput").value;
  var length = mynumber.toString().length;
  length = length - 1;
  
  var number = mynumber,
    output = [],
    sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }

    note1 = output[(length)];
    detectNote1()

}
function detectNote1() {
  if (note1 == 1 || note1 == 8) {
    A.play();
  }
   else if (note1 == 2 || note1 == 9) {
    B.play();
  }
   else if (note1 == 3 || note1 == 0) {
    C.play();
  }
   else if (note1 == 4) {
    D.play();
  }
  else if (note1 == 5) {
    E.play();
  }
  else if (note1 == 6) {
    F.play();
  }
  else if (note1 == 7) {
    G.play();
  }
}

$(document).on("keypress", function(e) {
  if (e.which == 13) {
    getNumber();
  }
});

var check = function() {
  if (1 == 1) {
    // run when condition is met
  } else {
    setTimeout(check, 1000); // check again in a second
  }
};

check();


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}