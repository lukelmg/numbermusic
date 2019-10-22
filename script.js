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

var lengthcount = 0;

var letterNote = "A";

function getNumber() {
  var mynumber = document.getElementById("mainInput").value; //get number of input
  var length = mynumber.toString().length; //calculate length of input
  length = length - 1; //subtract 1 so that 0 counts

  var number = mynumber,
    output = [],
    sNumber = number.toString();

  alert(sNumber);

  for (var i = 0; i < length; i++) {
    setTimeout(function() {
      output.push(+sNumber.charAt(i)); //change i to lengthcount
      note1 = output[length - length + lengthcount];
      detectNote1();

      noteToPlay[letterNote]();

      lengthcount = lengthcount + 1;

      console.log("Test");
    }, 500 * i);
  }
}

var noteToPlay = {
  A: function() {
    A.play();
  },
  B: function() {
    B.play();
  },
  C: function() {
    C.play();
  },
  D: function() {
    D.play();
  },
  E: function() {
    E.play();
  },
  F: function() {
    F.play();
  },
  G: function() {
    G.play();
  }
};

function detectNote1() {
  if (note1 == 1 || note1 == 8) {
    letterNote = "A";
  } else {
    if (note1 == 2 || note1 == 9) {
      letterNote = "B";
    } else {
      if (note1 == 3 || note1 == 0) {
        letterNote = "C";
      } else {
        if (note1 == 4) {
          letterNote = "D";
        } else {
          if (note1 == 5) {
            letterNote = "E";
          } else {
            if (note1 == 6) {
              letterNote = "F";
            } else {
              if (note1 == 7) {
                letterNote = "G";
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
