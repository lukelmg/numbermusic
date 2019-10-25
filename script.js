var input = document.getElementById("mainInput");
input.focus();
input.select();

var timeBetween = 325;

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

      noteToPlay[letterNote]();

      lengthcount = lengthcount + 1;

      console.log("Test");
    }, timeBetween * i);
  
    
          if (i == (length -1 )) {
            i = 0;
            mynumber = "";
            length = "";
            number = "";
            lengthcount = 0;
            
            break;
        
      }
  }
  
}
var frequency = 440.0
    var context = new AudioContext()
var o = context.createOscillator()

var noteToPlay = {
  A4: function() {
   // A.play();
    playNote(1000, 1000)
  },
  B4: function() {

  },
  C4: function() {
    
  },
  D4: function() {
   
  },
  E4: function() {
    
  },
  F4: function() {
    
  },
  G4: function() {
   
  },
  
  
  A5: function() {
    
  },
  B5: function() {

  },
  C5: function() {
    
  },
  D5: function() {
   
  },
  E5: function() {
    
  },
  F5: function() {
    
  },
  G5: function() {
   
  },
  
  
  
  A6: function() {
    
  },
  B6: function() {

  },
  C6: function() {
    
  },
  D6: function() {
   
  },
  E6: function() {
    
  },
  F6: function() {
    
  },
  G6: function() {
   
  },
  
  
  
  A7: function() {
    
  },
  B7: function() {

  },
  C7: function() {
    
  },
  D7: function() {
   
  },
  E7: function() {
    
  },
  F7: function() {
    
  },
  G7: function() {
   
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




var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

function playNote(frequency, duration) {
  // create Oscillator node
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
    }, duration);
}