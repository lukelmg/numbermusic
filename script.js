var input = document.getElementById("mainInput");
input.focus();
input.select();

var timeBetween = 10;
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
    }, timeBetween * i);

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
  A4: function() {
    // A.play();
    playNote(440.00, noteDuration);
  },
  B4: function() {
    playNote(493.88, noteDuration);
  },
  C4: function() {
    playNote(523.25, noteDuration);
  },
  D4: function() {
    playNote(587.33, noteDuration);
  },
  E4: function() {
    playNote(659.25, noteDuration);
  },
  F4: function() {
    playNote(698.46, noteDuration);
  },
  G4: function() {
    playNote(783.99, noteDuration);
  },

  
  
  
  A5: function() {
    playNote(880.00, noteDuration);
  },
  B5: function() {
    playNote(987.77, noteDuration);
  },
  C5: function() {
    playNote(1046.50, noteDuration);
  },
  D5: function() {
    playNote(1174.66, noteDuration);
  },
  E5: function() {
    playNote(1318.51, noteDuration);
  },
  F5: function() {
    playNote(1396.91, noteDuration);
  },
  G5: function() {
    playNote(1567.98, noteDuration);
  },

  
  
  A6: function() {
    playNote(1760.00, noteDuration);
  },
  B6: function() {
    playNote(1975.53, noteDuration);
  },
  C6: function() {
    playNote(2093.00, noteDuration);
  },
  D6: function() {
    playNote(1174.66, noteDuration);
  },
  E6: function() {
    playNote(1318.51, noteDuration);
  },
  F6: function() {
    playNote(1396.91, noteDuration);
  },
  G6: function() {
    playNote(1567.98, noteDuration);
  },

  
  
  A7: function() {
    playNote(1000, noteDuration);
  },
  B7: function() {
    playNote(1000, noteDuration);
  },
  C7: function() {
    playNote(1000, noteDuration);
  },
  D7: function() {
    playNote(1000, noteDuration);
  },
  E7: function() {
    playNote(1000, noteDuration);
  },
  F7: function() {
    playNote(1000, noteDuration);
  },
  G7: function() {
    playNote(1000, noteDuration);
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
