var input = document.getElementById("mainInput");
input.focus();
input.select();

var timeBetween = 1;
var noteDuration = 250;

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

  var number = mynumber,
    output = [],
    sNumber = number.toString();

  for (var i = 0; i < length; i++) {
    setTimeout(function() {
      output.push(+sNumber.charAt(lengthcount)); //change i to lengthcount
      note1 = output[length - length + lengthcount];
      detectNote1();

      noteToPlay[letterNote + "4"]();

      lengthcount = lengthcount + 1;

      console.log("Test");
    }, (timeBetween + noteDuration) * i);

    if (i == length - 1) {
      i = 0;
      mynumber = "";
      length = "";
      number = "";
      lengthcount = 0;

      break;
    }
  }
}
var frequency = 440.0;
var context = new AudioContext();
var o = context.createOscillator();

var noteToPlay = {
  C5: function() {
    // A.play();
    playNote(523.25, noteDuration);
  },
  Csharp5: function() {
    playNote(554.37, noteDuration);
  },
  D5: function() {
    playNote(587.33, noteDuration);
  },
  Eflat5: function  () {
    playNote(622.25, noteDuration);
  },
  E5: function () {
    playNote(659.25, noteDuration);
  },
  F5: function  () {
    playNote(698.46, noteDuration);
  },
  Fsharp5: function () {
    playNote(739.99, noteDuration);
  },
  G5: function  () {
    playNote(783.99, noteDuration);
  },
  Gsharp5: function () {
    playNote(830.61, noteDuration);
  },
  A5: function () {
    playNote(880.00, noteDuration);
  },
  Bflat5: function() {
    playNote(932.33, noteDuration);
  },
  B5: function () {
    playNote(987.77, noteDuration);
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

  document.getElementById("output").innerHTML = letterNote;
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

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration) {
  // create Oscillator node
  var oscillator = audioCtx.createOscillator();

  oscillator.type = "square";
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(function() {
    oscillator.stop();
  }, duration);
}
