function front() {
	var isPlaying = false;
	$(".front__player-play").click(function () {
		if (isPlaying) {
			$(".front__player-play").removeClass("_play");
			$(".front__player-audio")[0].pause();
			isPlaying = false;
		} else {
			isPlaying = true;
			$(".front__player-play").addClass("_play");
			$(".front__player-audio")[0].play();
		}
	});
	var swiper = new Swiper(".front__swiper", {
		// effect: "cards",
		speed: 1000,
		// loop: false,
		// loopAdditionalSlides: 5,
		// cardsEffect: {
		// 	slideShadows: false,
		// 	rotate: false,
		// 	perSlideOffset: 11,
		// 	perSlideRotate: 0,
		// },
		mousewheel: {},
		on: {
			slideChange: function (swiper) {
				$(".front__number").text(
					$(swiper.slides[swiper.activeIndex]).data("number")
				);
				$(".front__swiper").attr("data-slide", swiper.activeIndex);
			},
		},
		direction: "vertical",
		effect: "fade",
		// virtualTranslate: true,
		watchSlidesProgress: true,
		watchOverflow: true,
		initialSlide: 3,
	});
}
$(function () {
	front();
});
