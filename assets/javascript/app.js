
var count=90;

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














// reset
// when timer = 0 initialize scoreboard with button to reset