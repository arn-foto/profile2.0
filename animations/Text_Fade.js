const stack__desk = document.querySelector("stack");
const about__me = document.querySelector("#about__me");
const slider = document.querySelector(".slider");
const h1 = document.querySelector("h1");
const stack__github = document.querySelector(".stack__github");

// const span = document.querySelector("span");

const tl = new TimelineMax();

tl.fromTo("h1", 1, { x: "100%" }, { x: "0%", ease: Power2.easInout })
	.fromTo(
		".about__me",
		1,
		{ x: "-10%" },
		{ x: "0%", ease: Power2.easInout },
		"-=1"
	)
	.fromTo(
		".stack__desk",
		2,
		{ x: "-90%" },
		{ x: "0%", ease: Power2.easInout },
		"-=2"
	)
	.fromTo(
		".stack__github",
		1.5,
		{ x: "-70%" },
		{ x: "0%", ease: Power2.easInout },
		"-=1"
	);
