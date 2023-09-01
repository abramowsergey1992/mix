function gallery() {
	if ($(".gallery-slider").length) {
		$(".calendar-block .arrow-link").click(function () {
			$(".calendar-block").toggleClass("_open");
		});
		$(".air-calendar-select").each(function () {
			new AirDatepicker(this, {
				inline: true,
				onSelect({ date, formattedDate }) {
					console.log(
						$(".calendar-block").data("href") + formattedDate
					);
					barba.go($(".calendar-block").data("href") + formattedDate);
				},
			});
		});
		$(document).on(
			"click",
			".gallery-slider__swiper .swiper-slide",
			function () {
				console.log("click");
				$(".popup-gallery").fadeIn();
				let slide = $(this).attr("slide");
				let swiper = $(".popup-gallery__swiper")[0].swiper;
				swiper.slideTo(slide);
			}
		);

		$(".gallery-slider").each(function () {
			let $th = $(this);
			let i = 0;
			$th.find(".swiper-slide").each(function () {
				$(this).attr("slide", i);
				i++;
			});

			$(".popup-gallery__swiper .swiper-wrapper").html(
				$th.find(".swiper-wrapper").html()
				// $('.popup-gallery')[0].swiper.update()
			);

			let speed = 2000;
			let swiper = new Swiper($th.find(".gallery-slider__swiper")[0], {
				observerParent: true,
				observerUpdate: true,
				observer: true,
				loop: true,
				slidesPerView: "auto",
				speed: speed,
				preventClicks: false,
				preventClicksPropagation: false,
				preventInteractionOnTransition: false,
				spaceBetween: 20,
				breakpoints: {
					600: {
						spaceBetween: 50,
					},
					1300: {
						spaceBetween: 97,
					},
				},
				// autoplay: {
				// 	delay: 0,
				// },
			});
			let hover = false;
			let play = false;
			let direction = "";
			let t = 0;
			let interval = setInterval(function () {
				if (play) {
					if (t == 0) {
						if (direction == "LEFT") {
							swiper.slidePrev();
							console.log("left !!!!");
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

			let $cursor = $(this).find(".gallery-slider__cursor");

			$(this).mousemove(function (e) {
				gsap.to($cursor, 0.23, {
					left: e.pageX,
					top: e.pageY - $th.offset().top,
					ease: Power4.easOut,
				});

				direction = "";
				if (play && e.clientX < window.innerWidth / 3) {
					play = true;
					direction = "LEFT";

					console.log("autoplay left");
				}

				if (
					play &&
					e.clientX > window.innerWidth - window.innerWidth / 3
				) {
					play = true;
					direction = "RIGHT";
					console.log("autoplay right");
				}
			});
		});
	}
}
