$(function () {
	let scroll = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
	});
	scroll.on("scroll", (args) => {
		// Get all current elements : args.currentElements

		if (typeof args.currentElements === "object") {
			// let progress = args.currentElements["hhh"].progress;
			let progress = 0;

			for (key in args.currentElements) {
				console.log(
					$(args.currentElements[key].el).hasClass("two-photo")
				);
				if ($(args.currentElements[key].el).hasClass("two-photo")) {
					let $th = $(args.currentElements[key].el);
					$th.find(".two-photo__big:first-child").css(
						"padding-right",
						args.currentElements[key].progress * 174
					);
					$th.find(".two-photo__small:last-child").css(
						"padding-left",
						(1 - args.currentElements[key].progress) * 174
					);
					$th.find(".two-photo__big:last-child").css(
						"padding-left",
						args.currentElements[key].progress * 174
					);
					$th.find(".two-photo__small:first-child").css(
						"padding-right",
						(1 - args.currentElements[key].progress) * 174
					);
				}
			}

			// ouput log example: 0.34
			// gsap example : myGsapAnimation.progress(progress);
		}
	});

	barba.hooks.after(() => {
		components();
		bookTable();
		afisha();
		scroll.scrollTo("top", 100);
		setTimeout(function () {
			scroll.update();
		}, 1500);
	});

	barba.init();
});
