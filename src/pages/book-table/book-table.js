function bookTable() {
	if ($(".book-table__gallery").length) {
		$(".book-table__gallery").each(function () {
			let $th = $(this);
			let speed = 2000;
			let swiper = new Swiper($th.find(".book-table__swiper")[0], {
				centeredSlides: true,
				loop: true,
				loopedSlides: 7,
				observerParent: true,
				observerUpdate: true,
				observer: true,
				slidesPerView: 1,
				speed: speed,
				spaceBetween: 0,
				// autoplay: {
				// 	delay: 0,
				// },
			});
			let hover = false;
			let play = false;
			let direction = "";
			let t = 0;
			let interval = setInterval(function () {
				console.log();
				if (play) {
					if (t == 0) {
						console.log(direction, $th, swiper);
						if (direction == "LEFT") {
							swiper.slidePrev();
						}
						if (direction == "RIGHT") {
							swiper.slideNext();
						}
					}
					t += 100;
					if (t == speed) {
						t = 0;
					}
				}
			}, 100);
			$(this).hover(
				function () {
					play = true;
				},
				function () {
					play = false;
				}
			);

			let $cursor = $(this).find(".book-table__cursor");

			$(this).mousemove(function (e) {
				console.log(e);
				gsap.to($cursor, 0.23, {
					left: e.pageX - $th.offset().left,
					top: e.pageY - $th.offset().top,
					ease: Power4.easOut,
				});

				direction = "";
				if (play && e.clientX < $(this).innerWidth() / 2) {
					play = true;
					direction = "LEFT";
					t = 0;
					console.log("autoplay left");
				}

				if (play && e.clientX > $(this).innerWidth() / 2) {
					t = 0;
					play = true;
					direction = "RIGHT";
					console.log("autoplay right");
				}
			});
		});
	}
}
$(function () {
	bookTable();
});
