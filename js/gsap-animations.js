// script.js
gsap.timeline()
  .from(".left", { x: -50, opacity: 0, duration: 1, ease: "power2.out" })
  .from(".right", { x: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.5");

  // script.js
gsap.timeline()
  .to(".left", { x: 0, opacity: 1, duration: 1, ease: "power2.out" })
  .to(".right", { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5"); // Start slightly before the left shape finishes
