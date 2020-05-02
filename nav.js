let radio = document.getElementById("radio");
let line = document.getElementById("line");
let fullRadio = document.getElementById("radioLine");
let radioSound = document.getElementById("radioSound");
let shadow = document.getElementById("shadow");

line.style.animation = "lineMove 3s linear infinite";
fullRadio.style.animation = "float 3s ease-out infinite";
shadow.style.animation = "shadowInOut 3s ease-out infinite";
line.style.animationPlayState = "paused";
fullRadio.style.animationPlayState = "paused";
shadow.style.animationPlayState = "paused";

fullRadio.addEventListener("mouseover", radioAnim);
fullRadio.addEventListener("mouseout", function(){
	line.style.animationPlayState = "paused";
  fullRadio.style.animationPlayState = "paused";
  shadow.style.animationPlayState = "paused";
  radioSound.pause();
});

let record = document.getElementById("record");
let stayAlive = document.getElementById("stayAlive");
record.addEventListener("mouseover", recordAnim);
record.addEventListener("mouseout", function() {
  record.style.animationPlayState = "paused";
  stayAlive.pause();
})

let cassette = document.getElementById("cassette");
let cassetteSong = document.getElementById("straightUp");
cassette.addEventListener("mouseover", cassetteAnim);
cassette.addEventListener("mouseout", function() {
  cassetteSong.pause();
})

function radioAnim()
{
  radioSound.play();
  line.style.animationPlayState = "running";
  fullRadio.style.animationPlayState = "running";
  shadow.style.animationPlayState = "running";
}

function recordAnim()
{
  record.style.animation = "rotation 2s infinite linear";
  record.style.animationPlayState = "running";
  stayAlive.play();
}

function cassetteAnim()
{
  cassetteSong.play();
}
