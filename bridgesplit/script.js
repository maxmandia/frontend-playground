const text = document.querySelector(".typewriter");
const messageArray = [
  "real estate",
  "commercial loans",
  "art",
  "unique assets.",
];
let textPosition1 = 0;
let textPosition2 = 0;
let textPosition3 = 0;
let textPosition4 = 0;
let speed = 150;

(function typewriter() {
  if (textPosition1++ <= messageArray[0].length) {
    text.innerHTML =
      messageArray[0].substring(0, textPosition1) + "<span>\u25ae</span>";
    setTimeout(typewriter, speed);
  } else if (textPosition2++ <= messageArray[1].length) {
    text.innerHTML =
      messageArray[1].substring(0, textPosition2) + "<span>\u25ae</span>";
    setTimeout(typewriter, speed);
  } else if (textPosition3++ <= messageArray[2].length) {
    text.innerHTML =
      messageArray[2].substring(0, textPosition3) + "<span>\u25ae</span>";
    setTimeout(typewriter, 250);
  } else if (textPosition4++ <= messageArray[3].length) {
    text.classList.add("color-change");
    text.innerHTML =
      messageArray[3].substring(0, textPosition4) + "<span>\u25ae</span>";
    if (textPosition4 - 1 === messageArray[3].length) {
      const span = document.querySelector("span");
      text.innerHTML = messageArray[3].substring(0, textPosition4);
      span.classList.add("stop-animation");
    }
    setTimeout(typewriter, speed);
  }
})();

// fade in

const faders = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.5,
  //   rootMargin: "0px 0px -200px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log("yo");
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
