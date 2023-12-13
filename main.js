// DARK MODE TOGGLE---------------------------------------------

const toggleSwitch = document.querySelector("#modeToggle");

const stylesheet = document.querySelector("#stylesheet");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");

    stylesheet.href = "dark-styles.css"; // Change href to your dark mode styles
  } else {
    document.body.classList.remove("dark-mode");

    stylesheet.href = "styles.css"; // Change href to your light mode styles
  }
});

// SCROLL REVEAL-----------------------------------------------

const sr = ScrollReveal({
  distance: "35px",
  duration: 2500,
  reset: true,
});

sr.reveal(".logo", { delay: 300, origin: "top" });
// sr.reveal(".navbar", { delay: 300, origin: "top" });
sr.reveal(".right img", { delay: 1000, origin: "right" });
sr.reveal(".left", { delay: 1000, origin: "left" });
sr.reveal(".about", { delay: 250, origin: "bottom" });

// Google Sheets Contact Form Script

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx0hygDrdmo1y1_bh3RK2Vb6pLGn5UTmAJcoIg0XU-X9vibrY7g8tj0QgAFHzwiBSmQWw/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Succesfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// GLOWING CARD On HOVER ANIMATION
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.onmousemove = function (e) {
    let x = e.pageX - card.offsetLeft;
    let y = e.pageY - card.offsetTop;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  };
});
