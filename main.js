const sr = ScrollReveal({
  distance: "35px",
  duration: 2500,
  reset: true,
});

sr.reveal(".logo", { delay: 300, origin: "top" });
sr.reveal(".navbar", { delay: 300, origin: "top" });
sr.reveal(".right img", { delay: 1000, origin: "right" });
sr.reveal(".left", { delay: 1000, origin: "left" });
sr.reveal(".about", { delay: 250, origin: "bottom" });
