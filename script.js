
$(document).ready(function(){

  var p = document.getElementById("Ps");
  var w = document.getElementById("Ws");

minutes = 25;
minutesP = 5;
var x;
var y;
var running = false;
function setTimer(x){
  time = x *60*1000;
}
function setTimerP(x){
  timeP = x *60*1000;
}

    
    $("#start").click(function(){

      if (!running){
 minutes = $("#input").val();
  minutesP = $("#inputPause").val();
        setTimer(minutes);
setTimerP(minutesP);
      work();
      running = true;
      }
});

function reset(){
  
running = false;
minutes = $("#input").val();
  minutesP = $("#inputPause").val();
clearInterval(x);
clearInterval(y);
$("#timer").html("Set up your tempo and click start.");
$("title").html("Pomodoro Clock");
}


  $("#reset").click(function(){
      reset();
  })


function work(){
var countDownDate = new Date().getTime() +  time;
 x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#timer").html("Okay, work! " +minutes + "m " + seconds + "s ");
  $("title").html("W (" +minutes + "m " + seconds + "s)");
  if (distance < 0) {
    clearInterval(x);
    $("#timer").html("Work over, starting pause!")
    $("title").html("P!");
    p.play();
    pause();
  }
}, 1000);
  
}//work

function pause(){
var countDownDate = new Date().getTime() +  timeP;
 y = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#timer").html("Chill... " +minutes + "m " + seconds + "s ");
  $("title").html("P (" +minutes + "m " + seconds + "s)");
  if (distance < 0) {
    clearInterval(y);
    $("#timer").html("Pause over, starting work...");
    $("title").html("W!");
    w.play();
    work();
  }
}, 1000);
}//pause



});