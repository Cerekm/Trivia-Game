var count= 100;
var resetButton = $("<btn>").val("Try again");
var q1 = $("#q1").val();
var q2 = $("#q2").val();
var q3 = $("#q3").val();
var q4 = $("q4").val();
var q5 = $("#q5").val();
var q6 = $("#q6").val();
var q7 = $("#q7").val();
var q8 = $("#q8").val();
var q9 = $("#q9").val();
var q10 = $("q10").val();
var correct = 0;
if (q1 == "blue") {
    correct++;
    console.log(correct)
}
if (q2 =="east") {
    correct++;
}
if (q3 == "7") {
    correct++;
}
if (q4 == "George Washington") {
    correct++;
}
if (q5 == "copper") {
    correct++;
}
if (q6 == "Space Jam") {
    correct++;
    console.log(correct)
}
if (q7 == "Netherlands") {
    correct++;
}
if (q8 == "true") {
    correct++;
}
if (q9 == "true") {
    correct++;
}
if (q10 == "false") {
    correct++;
}


console.log(q1);


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
    $("#done").css("visibility", "visible");
   
});
if (count === 1 || $("#done").on("click") ){
    $("#q1").css("visibility", "hidden");
    $("#q2").css("visibility", "hidden");
    $("#q3").css("visibility", "hidden");
    $("#q4").css("visibility", "hidden");
    $("#q5").css("visibility", "hidden");
    $("#q6").css("visibility", "hidden");
    $("#q7").css("visibility", "hidden");
    $("#q8").css("visibility", "hidden");
    $("#q9").css("visibility", "hidden");
    $("#q10").css("visibility", "hidden");

function check(){
    

    $("#wrapper").append(resetButton);
    

}}

$("#done").on("click", function check() {
    if (q1 ==="blue") {
        correct++;
        console.log(correct);
    }
    if (q2 === "east") {
        correct++;
    }
    if (q3 === "7") {
        correct++;
    }
    if (q4 ==="George Washington") {
        correct++;
    }
    if (q5 === "copper") {
        correct++;
    }
    if (q6 === "Space Jam") {
        correct++;
        console.log(correct);
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
    console.log(correct);
    $("#q1").css("visibility", "hidden");
    $("#q2").css("visibility", "hidden");
    $("#q3").css("visibility", "hidden");
    $("#q4").css("visibility", "hidden");
    $("#q5").css("visibility", "hidden");
    $("#q6").css("visibility", "hidden");
    $("#q7").css("visibility", "hidden");
    $("#q8").css("visibility", "hidden");
    $("#q9").css("visibility", "hidden");
    $("#q10").css("visibility", "hidden");
    $("#wrapper").text("Your score:" + correct +"/10");
    $("#wrapper").append(resetButton);

})












// reset




// when timer = 0 initialize scoreboard with button to reset