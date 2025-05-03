const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;

const HEART_INTERVAL = 100;
const HEART_LIFETIME = 50000;
const MIN_FONT_SIZE = 10;
const MAX_FONT_SIZE = 50;
const MIN_ANIM_DURATION = 4;
const MAX_ANIM_DURATION = 12;

const emojiSymbols = ["🌊", "🏖️", "🛵", "🐒", "🦍", "🌴", "🏂", "🏔️", "❤️", "💖", "💜", "💙", "💖", "🩵", "💚"];

acceptRequest = () => {
  setInterval(() => {
    const heart = document.createElement("div");

    // this is so ugly XD
    const heartClassName = Math.random();
    if (heartClassName >= 0 && heartClassName < 0.083) {
      heart.className = "heart90";
    } 
    else if (heartClassName >= 0.083 && heartClassName < 0.166) {
      heart.className = "heart180";
    } 
    else if (heartClassName >= 0.166 && heartClassName < 0.249) {
      heart.className = "heart270";
    } 
    else if (heartClassName >= 0.249 && heartClassName < 0.332) {
      heart.className = "heart360";
    }
    else if (heartClassName >= 0.332 && heartClassName < 0.415) {
      heart.className = "heart720";
    }
    else if (heartClassName >= 0.415 && heartClassName < 0.498) {
      
      heart.className = "heart1440";
    }
    else if (heartClassName >= 0.498 && heartClassName < 0.581) {
      heart.className = "heartReverse90";
    }
    else if (heartClassName >= 0.581 && heartClassName < 0.664) {
      heart.className = "heartReverse180";
    }
    else if (heartClassName >= 0.664 && heartClassName < 0.747) {
      heart.className = "heartReverse270";
    }
    else if (heartClassName >= 0.747 && heartClassName < 0.83) {
      heart.className = "heartReverse360";
    }
    else if (heartClassName >= 0.83 && heartClassName < 0.913) {
      heart.className = "heartReverse720";
    }
    else {
      heart.className = "heartReverse1440";
    }

    heart.innerHTML = emojiSymbols[Math.floor(Math.random() * emojiSymbols.length)];

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
  alert("...");
}

theDate();
function theDate() {
    var date = new Date();
    var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var currentDate = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    document.getElementById("dateHere").innerHTML = month + "/" + currentDate + "/" + year;
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




