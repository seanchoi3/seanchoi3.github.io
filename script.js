window.onload = function() {
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleDateString("en-US");
  }
  
var prev_handler = window.onload;

var profileButton = document.getElementById("profile");
var contactButton = document.getElementById("contact");


function toggleProfile(){
    var bubbleProfile = document.getElementById("bubbleProfile");
    var bubbleContact = document.getElementById("bubbleContact");

    if(bubbleProfile.style.display == "none")
    {
        bubbleProfile.style.display = "block";
        bubbleContact.style.display = "none";
    }else
    {
        bubbleProfile.style.display = "none";
    }

}

function toggleContacts(){
    var bubbleContact = document.getElementById("bubbleContact");
    var bubbleProfile = document.getElementById("bubbleProfile");

    if(bubbleContact.style.display == "none")
    {
        bubbleContact.style.display = "block";
        bubbleProfile.style.display = "none";
    }else
    {
        bubbleContact.style.display = "none";
    }
}

function togglePixelAdventure(){
    var pixelAdventure = document.getElementById("bubblePixelAdventure");
    var portfolio = document.getElementById("mywebsite");
    var tottenham = document.getElementById("tottenhamP");

    if(pixelAdventure.style.display == "none")
    {
        pixelAdventure.style.display = "block";
        portfolio.style.display = "none";
        tottenham.style.display = "none";

    }else
    {
        pixelAdventure.style.display = "none";
    }
}

function togglePortfolio(){
    var pixelAdventure = document.getElementById("bubblePixelAdventure");
    var portfolio = document.getElementById("mywebsite");
    var tottenham = document.getElementById("tottenhamP");

    if(portfolio.style.display == "none")
    {
        pixelAdventure.style.display = "none";
        portfolio.style.display = "block";
        tottenham.style.display = "none";

    }else
    {
        portfolio.style.display = "none";
    }
}

function toggleTottenham(){
    var pixelAdventure = document.getElementById("bubblePixelAdventure");
    var portfolio = document.getElementById("mywebsite");
    var tottenham = document.getElementById("tottenhamP");

    if(tottenham.style.display == "none")
    {
        pixelAdventure.style.display = "none";
        portfolio.style.display = "none";
        tottenham.style.display = "block";

    }else
    {
        tottenham.style.display = "none";
    }
}


