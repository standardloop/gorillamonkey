const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;

const HEART_INTERVAL = 75;
const HEART_LIFETIME = 10000;
const MIN_FONT_SIZE = 20;
const MAX_FONT_SIZE = 50;
const MIN_ANIM_DURATION = 4;
const MAX_ANIM_DURATION = 6;

const heartSymbols = ["❤️", "💖", "💜", "💙", "🩷", "💖", "💕 ", "💓", "💗", "💞", "🥰", "🌹", "✨️"];

propose = () => {
  setInterval(() => {
    const heart = document.createElement("div");

    const heartClassName = Math.random();

    if (heartClassName >= 0 && heartClassName < .166) {
      heart.className = "heart180";
    } 
    else if (heartClassName >= .166 && heartClassName < .332) {
      heart.className = "heart360";
    }
    else if (heartClassName >= .332 && heartClassName < .498) {
      heart.className = "heart720";
    }
    else if (heartClassName >= .498 && heartClassName < .664) {
      heart.className = "heartReverse180";
    }
    else if (heartClassName >= .664 && heartClassName < .83) {
      heart.className = "heartReverse360";
    }
    else {
      heart.className = "heartReverse720";
    }

    heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const fontSize = Math.random() * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE;
    const animationDuration = Math.random() * (MAX_ANIM_DURATION - MIN_ANIM_DURATION) + MIN_ANIM_DURATION;

    Object.assign(heart.style, {
      left: Math.random() * 100 + "vw",
      fontSize: fontSize + "px",
      animationDuration: animationDuration + "s"
    });

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), HEART_LIFETIME);
  }, HEART_INTERVAL);

  parentElement.style.display = "none";
  successMessage.style.display = "block";
  changeColor.background =
    "linear-gradient(117deg, #ff41f7 0%, rgba(255, 73, 73, 0.81) 100%)";
};

declineRequest = () => {
  alert("💔");
}

theDate();

function theDate() {
    var date = new Date();
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var currentDate = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    document.getElementById("dateHere").innerHTML = month + "/" + 
currentDate + "/" + year;
}

// // Animate Text with Anim JS
// var textWrapper = document.querySelector(".ml6 .letters");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );

// anime
//   .timeline({ loop: true })
//   // .add({
//   //   targets: ".ml6 .letter",
//   //   translateY: ["1.1em", 0],
//   //   translateZ: 0,
//   //   duration: 750,
//   //   delay: (el, i) => 50 * i,
//   // })
//   .add({
//     targets: ".ml6",
//     opacity: 0,
//     duration: 10000,
//     easing: "easeOutExpo",
//     delay: 10000,
//   });




