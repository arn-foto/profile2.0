const nav = document.querySelector("nav");
const nav__left = document.querySelector(".nav__left");
const footer = document.querySelector("footer");

//  This function creates an animation for the head and footer
const tl = new TimelineMax();

tl.fromTo(nav, 1, { x: "10%" }, { x: "0%", ease: Power2.easInout }).fromTo(
  ".footer",
  1,
  { x: "-10%" },
  { x: "0%", ease: Power2.easInout },
  "-=1"
);
