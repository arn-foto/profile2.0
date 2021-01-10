const stack = document.querySelector("stack");
const about__me = document.querySelector("#about__me");
const slider = document.querySelector(".slider");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");

const tl = new TimelineMax();

tl.fromTo(".span", 1, { x: "100%" }, { x: "0%", ease: Power2.easInout })
  .fromTo(
    ".about__me",
    1,
    { x: "-10%" },
    { x: "0%", ease: Power2.easInout },
    "-=1"
  )
  .fromTo(".stack", 2, { x: "-90%" }, { x: "0%", ease: Power2.easInout }, "-=2")
  .fromTo("h1", 1.5, { x: "90%" }, { x: "0%", ease: Power2.easInout }, "-=1");
