window.onload = function() {
  var date = new Date();
  document.getElementById("timee").innerHTML = date.toLocaleDateString("en-US");
}

var prev_handler = window.onload;

var button1 = document.getElementById("user");
var button2 = document.getElementById("cont");
var button3 = document.getElementById("proj");
var button4 = document.getElementById("resme");
var button5 = document.getElementById("ghub");
var button6 = document.getElementById("linked");
var button7 = document.getElementById("ig");
var button8 = document.getElementById("garb");
var bottom = document.getElementById("startt");
var bottom2 = document.getElementById("searchh");
var bottom3 = document.getElementById("timee");
var btntext1 = document.getElementById("userText");
var btntext2 = document.getElementById("contText");
var btntext3 = document.getElementById("projText");
var btntext4 = document.getElementById("resmeText");
var btntext5 = document.getElementById("ghubText");
var btntext6 = document.getElementById("linkedText");
var btntext7 = document.getElementById("igText");
var btntext8 = document.getElementById("garbText");

// this function is responsible for handling animations right when the website loads
// buttons go from top to down
// the start bar goes from down to up.
window.onload = function(){

  if(prev_handler){
    prev_handler();
  }

  
  var animation = button1.animate([
    {top: "-50px"},
    {top: "50px"}
  ],{
    duration: 700,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = btntext1.animate([
    {top: "50px"},
    {top: "150px"}
  ],{
    duration: 700,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = button2.animate([
    {top: "-50px"},
    {top: "50px"}
  ],{
    duration: 1000,
    easing: "ease-out",
    fill: "forwards"
  });
  var animation = btntext2.animate([
    {top: "50px"},
    {top: "150px"}
  ],{
    duration: 1000,
    easing: "ease-out",
    fill: "forwards"
  });

  
  var animation = button3.animate([
    {top: "-50px"},
    {top: "50px"}
  ],{
    duration: 1300,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = btntext3.animate([
    {top: "50px"},
    {top: "150px"}
  ],{
    duration: 1300,
    easing: "ease-out",
    fill: "forwards"
  });
  
  var animation = button4.animate([
    {top: "-50px"},
    {top: "50px"}
  ],{
    duration: 1600,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = btntext4.animate([
    {top: "50px"},
    {top: "150px"}
  ],{
    duration: 1600,
    easing: "ease-out",
    fill: "forwards"
  });
  
  var animation = button5.animate([
    {top: "100px"},
    {top: "200px"}
  ],{
    duration: 700,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = btntext5.animate([
    {top: "200px"},
    {top: "300px"}
  ],{
    duration: 700,
    easing: "ease-out",
    fill: "forwards"
  });
  
  var animation = button6.animate([
    {top: "100px"},
    {top: "200px"}
  ],{
    duration: 1000,
    easing: "ease-out",
    fill: "forwards"
  });
  
  var animation = btntext6.animate([
    {top: "200px"},
    {top: "300px"}
  ],{
    duration: 1000,
    easing: "ease-out",
    fill: "forwards"
  });
  var animation = button7.animate([
    {top: "100px"},
    {top: "200px"}
  ],{
    duration: 1300,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = btntext7.animate([
    {top: "200px"},
    {top: "300px"}
  ],{
    duration: 1300,
    easing: "ease-out",
    fill: "forwards"
  });
  
  var animation = button8.animate([
    {top: "100px"},
    {top: "200px"}
  ],{
    duration: 1600,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = btntext8.animate([
    {top: "200px"},
    {top: "300px"}
  ],{
    duration: 1600,
    easing: "ease-out",
    fill: "forwards"
  });

  var animation = startt.animate([
    {top: "800px"},
    {top: "666px"}
  ],{
    duration: 5800,
    easing: "ease-out",
    fill: "forwards"
  });
  
  var animation = searchh.animate([
    {top: "800px"},
    {top: "666px"}
  ],{
    duration: 5800,
    easing: "ease-out",
    fill: "forwards"
  });
  var animation = timee.animate([
    {top: "800px"},
    {top: "666px"}
  ],{
    duration: 5800,
    easing: "ease-out",
    fill: "forwards"
  });

}

// these functions below represent information bubbles.
// if one is clicked, others are removed
function myfunction(){
  document.getElementById("mydropup").classList.toggle("show");
  document.getElementById("bubblespeech").classList.remove("show");
  document.getElementById("bubblecontact").classList.remove("show");
}

function myfunction2(){
  document.getElementById("bubblespeech").classList.toggle("show");
  document.getElementById("bubblecontact").classList.remove("show");
}

function myfunction3(){
  document.getElementById("bubblecontact").classList.toggle("show");
  document.getElementById("bubblespeech").classList.remove("show");
}
function myfunction4(){
  document.getElementById("bubblePixelAdventure").classList.toggle("show");
  document.getElementById("mywebsite").classList.remove("show");
  document.getElementById("tottenhamP").classList.remove("show");
}

function myfunction5(){
  document.getElementById("bubblePixelAdventure").classList.remove("show");
  document.getElementById("mywebsite").classList.toggle("show");
  document.getElementById("tottenhamP").classList.remove("show");
}

function myfunction6(){
  document.getElementById("bubblePixelAdventure").classList.remove("show");
  document.getElementById("mywebsite").classList.remove("show");
  document.getElementById("tottenhamP").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.start')) {
    var dropups = document.getElementsByClassName("dropup-menu");
    var i;
    for (i = 0; i < dropups.length; i++) {
      var openDropup = dropups[i];
      if (openDropup.classList.contains('show')) {
        openDropup.classList.remove('show');
      }
    }
  }

}
