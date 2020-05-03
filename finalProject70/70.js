let orangeAudio = document.getElementById("song");
orangeAudio.play();
let greenAudio = document.getElementById("song2");
greenAudio.pause();
let yellowAudio = document.getElementById("song3");
yellowAudio.pause();

let orangeButton = document.getElementById("circle2");
let greenButton = document.getElementById("circle4");
let yellowButton = document.getElementById("circle6");

let body = document.querySelector("body");
body.style.backgroundColor = "#ff944d";

orangeButton.addEventListener("mouseover", function(){
  orangeButton.style.fill = "orange"
});
orangeButton.addEventListener("mouseout", function(){
  orangeButton.style.fill = "#ff944d";
});

orangeButton.addEventListener("click", orangeButtonAnim);

greenButton.addEventListener("mouseover", function(){
  greenButton.style.fill = "greenYellow"
});
greenButton.addEventListener("mouseout", function(){
  greenButton.style.fill = "olive"
});

greenButton.addEventListener("click", greenButtonAnim);

yellowButton.addEventListener("mouseover", function(){
  yellowButton.style.fill = "lightgoldenrodyellow"
});
yellowButton.addEventListener("mouseout", function(){
  yellowButton.style.fill = "#ffe44d"
});

yellowButton.addEventListener("click", yellowButtonAnim);

function orangeButtonAnim() {
 orangeButton.style.fill = "orangered"
 if (body.style.backgroundColor == "olive")
 {
   orangeAudio.play();
  greenAudio.pause();
   body.style.animation = "greenToOrangeBackground 3s linear";
   body.style.backgroundColor = "#ff944d";
 }
 else {
   orangeAudio.play();
   yellowAudio.pause();
     body.style.animation = "yellowToOrangeBackground 3s linear";
     body.style.backgroundColor = "#ff944d";
 }
}

function greenButtonAnim() {
 greenButton.style.fill = "forestGreen"
 if (body.style.backgroundColor == "rgb(255, 148, 77)") {
   greenAudio.play();
   orangeAudio.pause();
   body.style.animation = "orangeToGreenBackground 3s linear";
   body.style.backgroundColor = "olive";
 }
 else {
    greenAudio.play();
    yellowAudio.pause();
    body.style.animation = "yellowToGreenBackground 3s linear";
    body.style.backgroundColor = "olive";
 }
}

function yellowButtonAnim() {
 yellowButton.style.fill = "darkGoldenrod"
 if (body.style.backgroundColor == "olive") {
   yellowAudio.play();
   greenAudio.pause();
   body.style.animation = "greenToYellowBackground 3s linear";
   body.style.backgroundColor = "#ffe44d";
 }
 else {
    yellowAudio.play();
    orangeAudio.pause();
    body.style.animation = "orangeToYellowBackground 3s linear";
    body.style.backgroundColor = "#ffe44d";
 }
}
