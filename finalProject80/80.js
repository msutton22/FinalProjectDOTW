let pinkAudio = document.getElementById("song");
pinkAudio.play();
let purpleAudio = document.getElementById("song2");
purpleAudio.pause();
let blueAudio = document.getElementById("song3");
blueAudio.pause();

let pinkButton = document.getElementById("circle2");
let purpleButton = document.getElementById("circle4");
let blueButton = document.getElementById("circle6");

let body = document.querySelector("body");
body.style.backgroundColor = "hotpink";

pinkButton.addEventListener("mouseover", function(){
  pinkButton.style.fill = "pink"
});
pinkButton.addEventListener("mouseout", function(){
  pinkButton.style.fill = "hotpink";
});

pinkButton.addEventListener("click", pinkButtonAnim);

purpleButton.addEventListener("mouseover", function(){
  purpleButton.style.fill = "orchid"
});
purpleButton.addEventListener("mouseout", function(){
  purpleButton.style.fill = "mediumorchid"
});

purpleButton.addEventListener("click", purpleButtonAnim);

blueButton.addEventListener("mouseover", function(){
  blueButton.style.fill = "paleturquoise"
});
blueButton.addEventListener("mouseout", function(){
  blueButton.style.fill = "turquoise"
});

blueButton.addEventListener("click", blueButtonAnim);

function pinkButtonAnim() {
 pinkButton.style.fill = "mediumvioletred"
 if (body.style.backgroundColor == "mediumorchid")
 {
   pinkAudio.play();
   purpleAudio.pause();
   body.style.animation = "purpleToPinkBackground 3s linear";
   body.style.backgroundColor = "hotpink";
 }
 else {
   pinkAudio.play();
   blueAudio.pause();
  body.style.animation = "blueToPinkBackground 3s linear";
  body.style.backgroundColor = "hotpink";
 }
}

function purpleButtonAnim() {
 purpleButton.style.fill = "indigo"
 if (body.style.backgroundColor == "hotpink") {
   purpleAudio.play();
   pinkAudio.pause();
   body.style.animation = "pinkToPurpleBackground 3s linear";
   body.style.backgroundColor = "mediumorchid";
 }
 else {
    purpleAudio.play();
    blueAudio.pause();
    body.style.animation = "blueToPurpleBackground 3s linear";
    body.style.backgroundColor = "mediumorchid";
 }
}

function blueButtonAnim() {
 blueButton.style.fill = "darkcyan"
 if (body.style.backgroundColor == "hotpink") {
   blueAudio.play();
   pinkAudio.pause();
   body.style.animation = "pinkToBlueBackground 3s linear";
   body.style.backgroundColor = "turquoise";
 }
 else {
    blueAudio.play();
    purpleAudio.pause();
    body.style.animation = "purpleToBlueBackground 3s linear";
    body.style.backgroundColor = "turquoise";
 }
}
