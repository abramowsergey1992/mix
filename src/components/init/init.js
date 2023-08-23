$(function () {
	let scroll = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
	});
	scroll.on("scroll", (args) => {
		// Get all current elements : args.currentElements
		// console.log(args);
		if (typeof args.currentElements["hey"] === "object") {
			let progress = args.currentElements["hey"].progress;
			// console.log(progress);
			// ouput log example: 0.34
			// gsap example : myGsapAnimation.progress(progress);
		}
	});

	barba.hooks.after(() => {
		components();
		afisha();
		scroll.scrollTo("top", 100);
		setTimeout(function () {
			scroll.update();
		}, 1500);
	});

	barba.init();
});
