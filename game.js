// alert("Hi");
var gamepattern=[];
var userpattern=[];
var buttonColors=["red","yellow","green","blue"];
var level=0;
function nextsequece()
{
  level++;
  $("h1").text("level "+level);
  var x=Math.floor(Math.random()*4);
  // return x;
  var randomcolor=buttonColors[x];
  gamepattern.push(randomcolor);
  $("#"+randomcolor).fadeOut(200).fadeIn(200);

  playsound(randomcolor);
}
$(".btn").click(function()
{
  var userclicked = $(this).attr("id");

  userpattern.push(userclicked);
  console.log(userpattern);
  animatepress(userclicked);
  checkanswer(userpattern.length-1);
});
function playsound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatepress(colour)
{
  $('#'+colour).addClass("pressed");
  setTimeout(function() {
    $('#'+colour).removeClass("pressed");
  //your code to be executed after 1 second
}, 100);
}

$(document).keypress(function()
{
  if(level==0)
  nextsequece();
})

function checkanswer(recent)
{
  if(gamepattern[recent]===userpattern[recent])
  {
    if(gamepattern.length===userpattern.length)
    {
      userpattern=[];
      setTimeout(function() {
        nextsequece();
      //your code to be executed after 1 second
    }, 1000);

    }
  }
  else
  {

  playsound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
    $("h1").text("Game Over Press Any Key To Restart");
    $
  //your code to be executed after 1 second
}, 200);


startagain();
  }
}
function startagain()
{
  gamepattern=[];
  level=0;
  userpattern=[];
    // $("h1").text("Press A Key to Start");
}
