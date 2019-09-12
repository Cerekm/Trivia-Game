
var count=90;
var correct= 0;
var question1 = $("q1").val();
var question2 = $("q2").val();
var question3 = $("q3").val();
var question4 = $("q4").val();
var question5 = $("q5").val();
var question6 = $("q6").val();
var question7 = $("q7").val();
var question8 = $("q8").val();
var question9 = $("q9").val();
var question10 = $("q10").val();


$("#start").on("click", function(timer) {


//1000 will  run it every 1 second
var counter=setInterval(timer, 1000); 

// Update the count down every 1 second
function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     check = true;

     return;
     
  }

  //Code showing the number of seconds here
  $("#timer").text("seconds left:" + count);
}



});

$("#start").on("click", function startquiz() {
    $("#q1").css("visibility", "visible");
    $("#q2").css("visibility", "visible");
    $("#q3").css("visibility", "visible");
    $("#q4").css("visibility", "visible");
    $("#q5").css("visibility", "visible");
    $("#q6").css("visibility", "visible");
    $("#q7").css("visibility", "visible");
    $("#q8").css("visibility", "visible");
    $("#q9").css("visibility", "visible");
    $("#q10").css("visibility", "visible");
   
});

function check(){
    if (q1 === "blue") {
        correct++;
    }
    if (q2 === "east") {
        correct++;
    }
    if (q3 === "7") {
        correct++;
    }
    if (q4 === "George Washington") {
        correct++;
    }
    if (q5 === "copper") {
        correct++;
    }
    if (q6 === "Space Jam") {
        correct++;
    }
    if (q7 === "Netherlands") {
        correct++;
    }
    if (q8 === "true") {
        correct++;
    }
    if (q9 === "true") {
        correct++;
    }
    if (q10 === "false") {
        correct++;
    }
}














// reset




// when timer = 0 initialize scoreboard with button to reset