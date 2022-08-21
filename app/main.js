const innerCircle = document.querySelector(".circle-inside");
const noOfBreaths = document.querySelector(".input-breaths");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const displayRemainingBreaths = document.querySelector(".remaining-breaths");
let leftBreaths = 3;

noOfBreaths.addEventListener("change", () => {
  leftBreaths = noOfBreaths.value;
  console.log(leftBreaths);
  displayRemainingBreaths.innerText = leftBreaths;
});

const bgaudio = new Audio();
const breathein = document.getElementById("breathein");
const hold = document.getElementById("hold");
const breatheout = document.getElementById("breatheout");

bgaudio.volume = 0.6;
bgaudio.autoplay = true;

const growCircle = () => {
  innerCircle.classList.add("circle-grow");
  setTimeout(() => {
    innerCircle.classList.remove("circle-grow");
  }, 8000);
};

const updateText = () => {
  leftBreaths--;
  displayRemainingBreaths.innerText = leftBreaths;
  instructions.innerText = "Breath in";
  breathein.play();
  setTimeout(() => {
    instructions.innerText = "Hold";
    hold.play();
    setTimeout(() => {
      instructions.innerText = "Breath Out!!";
      breatheout.play();
    }, 4000);
  }, 4000);
};

const breathingCycle = () => {
  const breathingAnimation = setInterval(() => {
    if (leftBreaths === 0) {
      return;
    }
    growCircle();
    updateText();
  }, 12000);
};

start.addEventListener("click", () => {
  console.log("i m in this");
  breathingCycle();
  growCircle();
  updateText();
});
