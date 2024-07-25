// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("border-bottom");
      navbar.classList.add("border-secondary");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("border-bottom");
      navbar.classList.remove("border-secondary");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);

// Video Modal
const videoBtn = document.querySelector(".video-btn");
const videoModal = document.querySelector("#videoModal");
const video = document.querySelector("#video");
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener("click", () => {
    videoSrc = videoBtn.getAttribute("data-bs-src");
  });
}

if (videoModal !== null) {
  videoModal.addEventListener("shown.bs.modal", () => {
    video.setAttribute(
      "src",
      videoSrc + "?autoplay=1;modestbranding=1;showInfo=0"
    );
  });

  videoModal.addEventListener("hide.bs.modal", () => {
    video.setAttribute("src", videoSrc);
  });
}

// Multiple Typing Text Animation
const texts = ["Small Business", "Startups", "Enterprise"];

const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingTextElement = document.querySelector(".typing-text");

function type() {
  const currentText = texts[currentTextIndex];

  if (isDeleting) {
    typingTextElement.textContent = currentText.substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
  } else {
    typingTextElement.textContent = currentText.substring(
      0,
      currentCharIndex + 1
    );
    currentCharIndex++;

    if (currentCharIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenTexts);
      return;
    }
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", (event) => {
  type();
});
