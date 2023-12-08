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

// sr.reveal(".logo", { delay: 300, origin: "top" });
// sr.reveal(".navbar", { delay: 300, origin: "top" });
sr.reveal(".right img", { delay: 1000, origin: "right" });
sr.reveal(".left", { delay: 1000, origin: "left" });
sr.reveal(".about", { delay: 250, origin: "bottom" });
