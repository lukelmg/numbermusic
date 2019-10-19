var input = document.getElementById('mainInput');
input.focus();
input.select();

var timeBetween = 300;

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
   note2 = output[length - length + 1];
   note3 = output[length - length + 2];
   note4 = output[length - length + 3];
   note5 = output[length - length + 4];
   note6 = output[length - length + 5];
   note7 = output[length - length + 6];
   note8 = output[length - length + 7];
   note9 = output[length - length + 8];
   note10 = output[length - length + 9];
  
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
  
  if (note1 == 0) {A.play();} if (note1 == 1) {B.play();} if (note1 == 2) {C.play();} if (note1 == 3) {D.play();} if (note1 == 4) {E.play();} if (note1 == 5) {F.play();} if (note1 == 6) {G.play();}
  setTimeout(function(){
    if (note2 == 0) {A.play();} if (note2 == 1) {B.play();} if (note2 == 2) {C.play();} if (note2 == 3) {D.play();} if (note2 == 4) {E.play();} if (note2 == 5) {F.play();} if (note2 == 6) {G.play();}
    setTimeout(function(){
     if (note3 == 0) {A.play();} if (note3 == 1) {B.play();} if (note3 == 2) {C.play();} if (note3 == 3) {D.play();} if (note3 == 4) {E.play();} if (note3 == 5) {F.play();} if (note3 == 6) {G.play();}
      setTimeout(function(){
     if (note4 == 0) {A.play();} if (note4 == 1) {B.play();} if (note4 == 2) {C.play();} if (note4 == 3) {D.play();} if (note4 == 4) {E.play();} if (note4 == 5) {F.play();} if (note4 == 6) {G.play();}
        setTimeout(function(){
     if (note5 == 0) {A.play();} if (note5 == 1) {B.play();} if (note5 == 2) {C.play();} if (note5 == 3) {D.play();} if (note5 == 4) {E.play();} if (note5 == 5) {F.play();} if (note5 == 6) {G.play();}
          setTimeout(function(){
     if (note6 == 0) {A.play();} if (note6 == 1) {B.play();} if (note6 == 2) {C.play();} if (note6 == 3) {D.play();} if (note6 == 4) {E.play();} if (note6 == 5) {F.play();} if (note6 == 6) {G.play();}
            setTimeout(function(){
     if (note7 == 0) {A.play();} if (note7 == 1) {B.play();} if (note7 == 2) {C.play();} if (note7 == 3) {D.play();} if (note7 == 4) {E.play();} if (note7 == 5) {F.play();} if (note7 == 6) {G.play();}
              setTimeout(function(){
     if (note8 == 0) {A.play();} if (note8 == 1) {B.play();} if (note8 == 2) {C.play();} if (note8 == 3) {D.play();} if (note8 == 4) {E.play();} if (note8 == 5) {F.play();} if (note8 == 6) {G.play();}
                setTimeout(function(){
     if (note9 == 0) {A.play();} if (note9 == 1) {B.play();} if (note9 == 2) {C.play();} if (note9 == 3) {D.play();} if (note9 == 4) {E.play();} if (note9 == 5) {F.play();} if (note9 == 6) {G.play();}
                  setTimeout(function(){
     if (note10 == 0) {A.play();} if (note10 == 1) {B.play();} if (note10 == 2) {C.play();} if (note10 == 3) {D.play();} if (note10 == 4) {E.play();} if (note10 == 5) {F.play();} if (note10 == 6) {G.play();}
}, timeBetween);
}, timeBetween);
}, timeBetween);
}, timeBetween);
}, timeBetween);
}, timeBetween);
}, timeBetween);
}, timeBetween);
}, timeBetween);
 

 
}



$(document).on('keypress',function(e) {
    if(e.which == 13) {
        getNumber();
    }
});
