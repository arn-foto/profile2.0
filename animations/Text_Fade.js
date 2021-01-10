const stack = document.querySelector("stack");
const about__me = document.querySelector("#about__me");
const slider = document.querySelector(".slider");
const h1 = document.querySelector("h1");
const span = document.querySelector("span");

const tl = new TimelineMax();

tl.fromTo(".nav__left", 1, { x: "-100%" }, { x: "0%", ease: Power2.easInout })
  .fromTo(
    ".about__me",
    1,
    { x: "-10%" },
    { x: "0%", ease: Power2.easInout },
    "-=1"
  )
  .fromTo(".stack", 1, { x: "90%" }, { x: "0%", ease: Power2.easInout }, "-=2")
  .fromTo("h1", 1.5, { x: "90%" }, { x: "0%", ease: Power2.easInout }, "-=1")
  .fromTo("span", 1, { x: "90%" }, { x: "0%", ease: Power2.easInout }, "-=2");

// gsap.registerEffect({
//   name: "fade",
//   defaults: { duration: 1 }, //defaults get applied to the "config" object passed to the effect below
//   effect: (targets, config) => {
//     return gsap.to(targets, { y: 490, duration: 2, ease: Power2.easInout });
//   },
// });

// //now we can use it like this:
// //gsap.effects.fade(".box");

// document.querySelectorAll(".fullstack__img").forEach(function (box) {
//   box.addEventListener("mouseenter", function () {
//     gsap.effects.fade(this);
//   });
// });

// const slider = document.querySelector(".slider");

// const tl = new TimeLineMax();
// tl.fromTo(slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easInout }, "-=1");
