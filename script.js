

var bubbleProfile = document.getElementById("bubbleProfile");
var bubbleContact = document.getElementById("bubbleContact");
var pixelAdventure = document.getElementById("bubblePixelAdventure");
var portfolio = document.getElementById("mywebsite");
var tottenham = document.getElementById("tottenhamP");
var seansational = document.getElementById('seansational');
var pig = document.getElementById('pig');
const listProjects = [pixelAdventure, portfolio, tottenham, seansational, pig];
const listProfile = [bubbleProfile, bubbleContact];

var prev_handler = window.onload;
window.onload = function() {
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleDateString("en-US");
    };


function toggleUser(num){
    if(listProfile[num].style.display === "block"){
        listProfile[num].style.display = "none";
    }else{
        listProfile[0].style.display = "none";
        listProfile[1].style.display = "none";
        listProfile[num].style.display = "block";
    }    
}

function toggleProfile(num){
    for(i = 0; i < listProjects.length; i++){
        listProjects[i].style.display = "none";
    }
    listProjects[num].style.display = "block";
}

