gsap.registerEffect({
  name: "fade",
  defaults: { duration: 1 }, //defaults get applied to the "config" object passed to the effect below
  effect: (targets, config) => {
    return gsap.to(targets, { y: 490, duration: 2, ease: Power2.easInout });
  },
});

//now we can use it like this:
//gsap.effects.fade(".box");

document.querySelectorAll(".fullstack__img").forEach(function (box) {
  box.addEventListener("mouseenter", function () {
    gsap.effects.fade(this);
  });
});

const slider = document.querySelector(".slider");

const tl = new TimeLineMax();
tl.fromTo(slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easInout }, "-=1");
