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

var letterNote = 'A';

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

  for (var i = 0; i < length + 1; i++) {
    setTimeout(function() {
      note1 = output[length - length + lengthcount];
      detectNote1();
      noteToPlay[letterNote]();
      lengthcount = lengthcount + 1;
    }, 500);
  }
}

var noteToPlay = {
  A: function() {A.play();},
  B: function() {B.play();},
  C: function() {C.play();},
  D: function() {D.play();},
  E: function() {E.play(); alert},
  F: function() {F.play(); alert("F");},
  G: function() {G.play(); alert("G");}
};

function detectNote1() {
  if (note1 == 1 || note1 == 8) {
    letterNote = 'A';
  } else {
    if (note1 == 2 || note1 == 9) {
      letterNote = 'B';
    } else {
      if (note1 == 3 || note1 == 0) {
       letterNote = 'C';
      } else {
        if (note1 == 4) {
          letterNote = 'D';
        } else {
          if (note1 == 5) {
            letterNote = 'E';
          } else {
            if (note1 == 6) {
              letterNote = 'F';
            } else {
              if (note1 == 7) {
                letterNote = 'G';
              }
            }
          }
        }
      }
    }
  }

  document.getElementById("output").innerHTML = note1;
}

$(document).on("keypress", function(e) {
  if (e.which == 13) {
    getNumber();
  }
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
