let yellowAudio = document.getElementById("song");
yellowAudio.play();
let blueAudio = document.getElementById("song2");
let redAudio = document.getElementById("song3");

let blueButton = document.getElementById("circle2");
let yellowButton = document.getElementById("circle4");
let redButton = document.getElementById("circle6");

let body = document.querySelector("body");
body.style.backgroundColor = "gold"

blueButton.addEventListener("mouseover", function(){
  blueButton.style.fill = "deepskyblue"
});
blueButton.addEventListener("mouseout", function(){
  blueButton.style.fill = "lightSkyblue"
});

blueButton.addEventListener("click", blueButtonAnim);

yellowButton.addEventListener("mouseover", function(){
  yellowButton.style.fill = "lightgoldenrodyellow"
});
yellowButton.addEventListener("mouseout", function(){
  yellowButton.style.fill = "gold"
});

yellowButton.addEventListener("click", yellowButtonAnim);

redButton.addEventListener("mouseover", function(){
  redButton.style.fill = "indianRed"
});
redButton.addEventListener("mouseout", function(){
  redButton.style.fill = "fireBrick"
});

redButton.addEventListener("click", redButtonAnim);

function blueButtonAnim() {
 blueButton.style.fill = "dodgerBlue"
 if (body.style.backgroundColor == "gold")
 {
   blueAudio.play();
   yellowAudio.pause();
   body.style.animation = "yellowToBlueBackground 3s linear";
   body.style.backgroundColor = "deepSkyblue";
 }
 else {
   blueAudio.play();
   redAudio.pause();
     body.style.animation = "redToBlueBackground 3s linear";
     body.style.backgroundColor = "deepSkyblue";
 }
}

function yellowButtonAnim() {
 yellowButton.style.fill = "darkGoldenrod"
 if (body.style.backgroundColor == "deepskyblue") {
   yellowAudio.play();
   blueAudio.pause();
   body.style.animation = "blueToYellowBackground 3s linear";
   body.style.backgroundColor = "gold";
 }
 else {
    yellowAudio.play();
    redAudio.pause();
    body.style.animation = "redToYellowBackground 3s linear";
    body.style.backgroundColor = "gold";
    console.log("heeey");
 }
}

function redButtonAnim() {
 redButton.style.fill = "darkRed"
 if (body.style.backgroundColor == "deepskyblue")
 {
   blueAudio.pause();
   redAudio.play();
   body.style.animation = "blueToRedBackground 3s linear";
 }
 else if (body.style.backgroundColor == "gold") {
   yellowAudio.pause();
   redAudio.play();
     body.style.animation = "yellowToRedBackground 3s linear";
 }
 body.style.backgroundColor = "indianRed";
}
