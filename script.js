window.onload = function() {
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleDateString("en-US");
  }
  
var prev_handler = window.onload;

var profileButton = document.getElementById("profile");
var contactButton = document.getElementById("contact");
var bubbleProfile = document.getElementById("bubbleProfile");
var bubbleContact = document.getElementById("bubbleContact");
var pixelAdventure = document.getElementById("bubblePixelAdventure");
var portfolio = document.getElementById("mywebsite");
var tottenham = document.getElementById("tottenhamP");
var seansational = document.getElementById('seansational');
const listProjects = [pixelAdventure, portfolio, tottenham, seansational];

function toggleProfile(){

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

    if(bubbleContact.style.display == "none")
    {
        bubbleContact.style.display = "block";
        bubbleProfile.style.display = "none";
    }else
    {
        bubbleContact.style.display = "none";
    }
}

function toggleProfile(num){
    for(i = 0; i < listProjects.length; i++){
        listProjects[i].style.display = "none";
    }
    listProjects[num].style.display = "block";
}
