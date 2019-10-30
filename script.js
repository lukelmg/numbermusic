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

var mynumber;

function getNumber() {
   mynumber = document.getElementById("mainInput").value; //get number of input
  var length = mynumber.toString().length; //calculate length of input

  var number = mynumber,
    output = [],
    sNumber = number.toString();

  for (var i = 0; i < length; i++) {
    setTimeout(function() {
      output.push(+sNumber.charAt(lengthcount)); //change i to lengthcount
      note1 = output[length - length + lengthcount];
      convertSelectToFunctions();

      noteToPlay[letterNote]();

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

var C5 = 523;
var Csharp5 = 554;
var D5 = 587;
var Eflat5 = 622;
var E5 = 659;
var F5 = 698;
var Fsharp5= 739;
var G5 = 783.99;
var Gsharp5 = 830.61;
var A5 = 880;
var Bflat5 = 932;
var B5 = 987;

var C6 = C5 * 2;
var Csharp6 = Csharp5 * 2;
var D6 = D5 * 2;
var Eflat6 = Eflat5;
var E6 = E5 * 2;
var F6 = F5 * 2;
var Fsharp6 = Fsharp5 * 2;
var G6 = G5 * 2;
var Gsharp6 = Gsharp5 * 2;
var A6 = A5 * 2;
var Bflat6 = Bflat5 * 2;
var B6 = B5 * 2;

var nanValue = NaN;


var noteToPlay = {
  
  pause: function() {
    playNote(1, noteDuration);
  },
  
  C5: function() {
    playNote(C5, noteDuration);
  },
  Csharp5: function() {
    playNote(Csharp5, noteDuration);
  },
  D5: function() {
    playNote(D5, noteDuration);
  },
  Eflat5: function  () {
    playNote(Eflat5, noteDuration);
  },
  E5: function () {
    playNote(E5, noteDuration);
  },
  F5: function  () {
    playNote(F5, noteDuration);
  },
  Fsharp5: function () {
    playNote(Fsharp5, noteDuration);
  },
  G5: function  () {
    playNote(G5, noteDuration);
  },
  Gsharp5: function () {
    playNote(Gsharp5, noteDuration);
  },
  A5: function () {
    playNote(A5, noteDuration);
  },
  Bflat5: function() {
    playNote(Bflat5, noteDuration);
  },
  B5: function () {
    playNote(B5, noteDuration);
  },
  
  
  C6: function() {
    playNote(C6, noteDuration);
  },
  Csharp6: function() {
    playNote(Csharp6, noteDuration);
  },
  D6: function() {
    playNote(D6, noteDuration);
  },
  Eflat6: function  () {
    playNote(Eflat6, noteDuration);
  },
  E6: function () {
    playNote(E6, noteDuration);
  },
  F6: function  () {
    playNote(F6, noteDuration);
  },
  Fsharp6: function () {
    playNote(Fsharp6, noteDuration);
  },
  G6: function  () {
    playNote(G6, noteDuration);
  },
  Gsharp6: function () {
    playNote(Gsharp6, noteDuration);
  },
  A6: function () {
    playNote(A6, noteDuration);
  },
  Bflat6: function() {
    playNote(Bflat6, noteDuration);
  },
  B6: function () {
    playNote(B6, noteDuration);
  }
 
};

function detectNote1() {
  if (note1 == 1) {
    letterNote = "C5";
  } else {
    if (note1 == 2) {
      letterNote = "D5";
    } else {
      if (note1 == 3) {
        letterNote = "E5";
      } else {
        if (note1 == 4) {
          letterNote = "F5";
        } else {
          if (note1 == 5) {
            letterNote = "G5";
          } else {
            if (note1 == 6) {
              letterNote = "A5";
            } else {
              if (note1 == 7) {
                letterNote = "B5";
              } else {
                if (note1 == 8) {
                  letterNote = "C6";
                } else {
                  if (note1 == 9) {
                    letterNote = "D6"; 
                  } else {
                    if (note1 == 0) {
                      letterNote = "E6"
                    } else {
                     
                    
                        letterNote = "pause";
                        
                      
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  document.getElementById("output").innerHTML = letterNote;
}

function cmajor() {
  if (note1 == 1) {
    letterNote = "C5";
  } else {
    if (note1 == 2) {
      letterNote = "D5";
    } else {
      if (note1 == 3) {
        letterNote = "E5";
      } else {
        if (note1 == 4) {
          letterNote = "F5";
        } else {
          if (note1 == 5) {
            letterNote = "G5";
          } else {
            if (note1 == 6) {
              letterNote = "A5";
            } else {
              if (note1 == 7) {
                letterNote = "B5";
              } else {
                if (note1 == 8) {
                  letterNote = "C6";
                } else {
                  if (note1 == 9) {
                    letterNote = "D6"; 
                  } else {
                    if (note1 == 0) {
                      letterNote = "E6"
                    }  else {
                      letterNote = "pause";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function dmajor() {
  if (note1 == 1) {
    letterNote = "D5";
  } else {
    if (note1 == 2) {
      letterNote = "E5";
    } else {
      if (note1 == 3) {
        letterNote = "Fsharp5";
      } else {
        if (note1 == 4) {
          letterNote = "G5";
        } else {
          if (note1 == 5) {
            letterNote = "A5";
          } else {
            if (note1 == 6) {
              letterNote = "B5";
            } else {
              if (note1 == 7) {
                letterNote = "Csharp6";
              } else {
                if (note1 == 8) {
                  letterNote = "D6";
                } else {
                  if (note1 == 9) {
                    letterNote = "E6"; 
                  } else {
                    if (note1 == 0) {
                      letterNote = "Fsharp6"
                    } else {
                      letterNote = "pause";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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

letterValue();
function letterValue(str){
    //var cmajorNotes={
    //    C5: 1, D5: 2, E5: 3, F5: 4, G5: 5, A5: 6, B5: 7, C6: 8, D6: 9, E6: 0,
    //}
    
    var cmajNotes = ['C5', 'Csharp5', 'D5', 'Eflat5', 'E5', 'F5', ]
    
    //alert(cmajNotes);
}



var selectedScale  = "cmajor";


var readFromSelect;

function readSelect() {
   readFromSelect = document.getElementById("scales").value;
}


function convertSelectToFunctions() {
  if (readFromSelect == "C Major") {
    cmajor();
  } else {
    if (readFromSelect == "D Major") {
      dmajor();
    }
  }
}
