document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.querySelector(".text-box");
  const overlay = document.querySelector(".overlay");

  textBox.addEventListener("click", (e) => {
    e.stopPropagation();
    overlay.classList.add("active");
    textBox.classList.add("focused");
    document.body.classList.add("overlay-open");
  });

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    textBox.classList.remove("focused");
    document.body.classList.remove("overlay-open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const confettiBtn = document.getElementById("confettiBtn");

  confettiBtn.addEventListener("click", () => {
    if (confetti.isRunning()) {
      confetti.stop();
    } else {
      confetti.start();
      setTimeout(() => {
        confetti.stop();
      }, 5000);
    }
  });
});

const navbar = document.querySelector(".perintah");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scroll-middle");
  } else {
    navbar.classList.remove("scroll-middle");
  }
});

const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let index = 0;

nextBtn.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slider-track img");
  if (index < slides.length - 1) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const sinceDate = new Date("2025-06-03T00:00:00");

function updateLoveDuration() {
  const now = new Date();
  let totalSeconds = Math.floor((now - sinceDate) / 1000);

  if (totalSeconds < 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days.toString().padStart(2, "0");
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}

updateLoveDuration();
setInterval(updateLoveDuration, 1000);

const galleryItems = document.querySelectorAll(".gallery-item");
const overlay = document.getElementById("overlayViewer");
const overlayImg = document.getElementById("overlayImage");
const overlayText = document.getElementById("overlayText");
const closeBtn = document.getElementById("closeOverlay");

const photoDescriptions = [
  "lorem ipsum dolor sit amet ...",
  "lorem ipsum dolor sit amet ...🍜",
  "lorem ipsum dolor sit amet ... 💞 ",
  "lorem ipsum dolor sit amet ...",
  "lorem ipsum dolor sit amet ...🫶🏻",
  "lorem ipsum dolor sit amet ...😖",
  "lorem ipsum dolor sit amet ...",
  "lorem ipsum dolor sit amet ...😢",
];

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    overlayImg.src = img.src;
    overlayText.textContent = photoDescriptions[index];
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

function revealOpenItElements() {
  const elements = document.querySelectorAll(".open-it");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOpenItElements);

function revealElement() {
  const elements = document.querySelectorAll(
    ".spotify-section, .text-box, .gallery-title, .photo-frame, .timebox, .hero-title, .flipbook, .header-text, .flower-right, .flower-left"
  );
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealElement);

window.addEventListener("load", function () {
  const heroText = document.querySelector(".valentines");
  heroText.classList.add("reveal");
});
