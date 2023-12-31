$(function(){})
function afisha() {
	if ($(".afisha-slider").length) {
		$(".afisha-slider").each(function () {
			let $th = $(this);
			let speed = 2000;
			const swiper = new Swiper(".afisha-slider__swiper", {
				slidesPerView: "auto",
				speed: speed,
				spaceBetween: 194,
				preventClicks: false,
			});
			let hover = false;
			let play = false;
			let direction = "";
			let t = 0;
			let interval = setInterval(function () {
				// console.log(play, direction, t);
				if (play) {
					if (t == 0) {
						console.log(direction);
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

			var $cursor = $(this).find(".afisha-slider__cursor");

			$(this).mousemove(function (e) {
				console.log($th.offset().top);
				gsap.to($cursor, 0.23, {
					left: e.pageX - $th.offset().left,
					top: e.pageY - $th.offset().top,
					ease: Power4.easOut,
				});

				direction = "";
				if (play && e.clientX < window.innerWidth / 3) {
					play = true;
					direction = "LEFT";
					t = 0;
					console.log("autoplay left");
				}

				if (
					play &&
					e.clientX > window.innerWidth - window.innerWidth / 3
				) {
					t = 0;
					play = true;
					direction = "RIGHT";
					console.log("autoplay right");
				}
			});
		});
	}
}

function bookTable() {
	if ($(".book").length) {
		$(".book").click(function () {
			barba.go($(".svg-map").data("href") + $(this).data("table"));
		});
	}
	if ($(".book-table__gallery").length) {
		let booktable = $("#booktable-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$("#booktable-form button[type='submit']").attr(
					"disabled",
					"disabled"
				);
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						barba.go($("#booktable-form").data("thanks"));
					},
					error: function () {
						barba.go($("#booktable-form").data("error"));
					},
				});
			},
		});
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

$(function(){})
function bookCorp() {
	let booktable = $("#bookcorp-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#bookcorp-form button[type='submit']").attr(
				"disabled",
				"disabled"
			);
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					barba.go($("#bookcorp-form").data("thanks"));
				},
				error: function () {
					barba.go($("#bookcorp-form").data("error"));
				},
			});
		},
	});
}

$(function(){})
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
	let length = $(".front-card").length;
	let active = $(".front-card").length;
	let prev = active - 1;
	let offsetx = 20;
	let offsety = 25;
	if (window.innerWidth < 900) {
		offsetx = 10;
		offsety = 10;
	}
	let speed = 0.1;
	if (window.innerWidth < 900) {
		speed = 0.2;
	}
	let animate = false;
	let arr = [];
	for (let i = 1; i <= length; i++) {
		arr.push(i);
	}
	console.log(arr);
	function frontDown() {
		animate = true;
		setTimeout(function () {
			animate = false;
		}, 1000);
		console.log("frontDown");
		let arr2 = [];

		arr2.push(arr[length - 1]);
		for (let index = 0; index < length - 1; index++) {
			arr2.push(arr[index]);
		}
		arr = arr2;
		console.log(arr);
		arr.forEach((element, i) => {
			if (i == 0) {
				console.log("#front-card-" + arr[0]);
				gsap.to("#front-card-" + arr[0], {
					top:
						window.innerWidth < 992
							? window.innerHeight
							: window.innerHeight - 300,
					zIndex: 1000,
					width: $(".front__swiper").width(),
					marginLeft: 0,
					duration: speed,
				});
			} else {
				let pos = length - 1 - i;
				gsap.to("#front-card-" + element, {
					top: offsety * pos * -1,
					zIndex: (i + 1) * 100,
					width: $(".front__swiper").width() - offsetx * 2 * pos,
					marginLeft: offsetx * pos,
					duration: speed,
				});
			}
		});
	}
	arr.forEach((element, i) => {
		let pos = length - 1 - i;
		if (i == length - 1) {
			gsap.to("#front-card-" + arr[length - 1], {
				top: 0,
				zIndex: 1000,
				width: $(".front__swiper").width(),
				marginLeft: 0,
				duration: speed,
			});
		} else if (i == 0) {
			console.log("#front-card-" + arr[0]);
			gsap.to("#front-card-" + arr[0], {
				top: window.innerHeight - 300,
				zIndex: 0,
				width: $(".front__swiper").width(),
				marginLeft: 0,
				duration: speed,
			});
		} else {
			gsap.to("#front-card-" + element, {
				top: offsety * pos * -1,
				zIndex: (i + 1) * 100,
				width: $(".front__swiper").width() - offsetx * 2 * pos,
				marginLeft: offsetx * pos,
				duration: speed,
			});
		}
	});
	function frontUp() {
		animate = true;
		setTimeout(function () {
			animate = false;
		}, 1000);
		console.log("frontUp");
		let arr2 = [];

		for (let index = 1; index < length; index++) {
			arr2.push(arr[index]);
		}
		arr2.push(arr[0]);
		arr = arr2;
		console.log(arr);
		arr.forEach((element, i) => {
			let pos = length - 1 - i;
			if (i == length - 1) {
				gsap.to("#front-card-" + arr[length - 1], {
					top: 0,
					zIndex: 1000,
					width: $(".front__swiper").width(),
					marginLeft: 0,
					duration: speed,
				});
			} else if (i == 0) {
				console.log("#front-card-" + arr[0]);
				gsap.to("#front-card-" + arr[0], {
					top: window.innerHeight - 300,
					zIndex: 0,
					width: $(".front__swiper").width(),
					marginLeft: 0,
					duration: speed,
				});
			} else {
				gsap.to("#front-card-" + element, {
					top: offsety * pos * -1,
					zIndex: (i + 1) * 100,
					width: $(".front__swiper").width() - offsetx * 2 * pos,
					marginLeft: offsetx * pos,
					duration: speed,
				});
			}
		});
	}
	$(".front__swiper").on("mousewheel", function (e) {
		let state = $("#front-top").attr("state");
		if (e.originalEvent.wheelDelta / 120 > 0) {
			if (!animate) {
				frontDown();
			}
		} else {
			if (!animate) {
				frontUp();
			}
		}
		$(".front__number").text(
			$("#front-card-" + arr[length - 1]).data("number")
		);
	});
	$(".front__swiper").swipe({
		preventDefaultEvents: false,
		//Generic swipe handler for all directions
		swipe: function (
			event,
			direction,
			distance,
			duration,
			fingerCount,
			fingerData
		) {
			console.log(direction);
			if (distance >= 30) {
				if (direction == "down" && window.innerWidth < 992) {
					frontDown();
				}
				if (direction == "up" && window.innerWidth < 992) {
					frontUp();
				}
			}
		},
	});

	console.log(active, prev);

	// if (prev < active && prev != 0) {
	// 	for (let i = prev; i <= active - 1; i++) {
	// 		arr.push(i);
	// 	}
	// 	for (let i = 0; i < prev; i++) {
	// 		arr.push(i);
	// 	}
	// 	arr.push(active);
	// 	console.log("down");
	// } else {

	// }

	// arr.forEach((element, i) => {
	// 	let pos = length - 1 - i;
	// 	gsap.to("#front-card-" + (element + 1), {
	// 		top: offsety * pos * -1,
	// 		zIndex: i * 100,
	// 		width: $(".front__swiper").width() - offsetx * 2 * pos,
	// 		marginLeft: offsety * pos,
	// 		duration: speed,
	// 	});
	// });
	// if (prev > active || (active == 0 && prev == length - 1)) {
	// 	console.log("prev");
	// 	gsap.to("#front-card-" + (prev + 1), {
	// 		top: window.innerHeight - 300,
	// 		zIndex: 1000,
	// 		width: $(".front__swiper").width() * 1.1,
	// 		marginLeft: 0,
	// 		duration: speed,
	// 		onComplete: function () {
	// 			gsap.to("#front-card-" + (prev + 1), {
	// 				top: offsety * -1 * (length - 1),
	// 				zIndex: 80,
	// 				width:
	// 					$(".front__swiper").width() -
	// 					offsetx * 2 * (length - 1),
	// 				marginLeft: offsety * (length - 1),
	// 				duration: speed,
	// 			});
	// 		},
	// 	});
	// }
	// if (prev < active && prev != 0) {
	// 	console.log("prxxxxv", "#front-card-" + (active + 1));
	// 	gsap.to("#front-card-" + (active + 1), {
	// 		top: window.innerHeight - 300,
	// 		zIndex: 100,
	// 		width: $(".front__swiper").width() * 1.1,
	// 		marginLeft: 0,
	// 		duration: speed,
	// 		onComplete: function () {
	// 			gsap.to("#front-card-" + (active + 1), {
	// 				top: 0,
	// 				zIndex: 1100,
	// 				width: $(".front__swiper").width(),
	// 				marginLeft: 0,
	// 				duration: speed,
	// 			});
	// 		},
	// 	});
	// }
	// console.log(arr);
}

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
				preventClicks: false,
				slidesPerView: "auto",
				// speed: speed,
				mousewheel: {
					forceToAxis: true,
				},
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
			// let hover = false;
			// let play = false;
			// let direction = "";
			// let t = 0;
			// let interval = setInterval(function () {
			// 	if (play) {
			// 		if (t == 0) {
			// 			if (direction == "LEFT") {
			// 				swiper.slidePrev();
			// 				console.log("left !!!!");
			// 			}
			// 			if (direction == "RIGHT") {
			// 				swiper.slideNext();
			// 			}
			// 		}
			// 		t += 100;
			// 		if (t == speed) {
			// 			t = 0;
			// 		}
			// 	}
			// }, 100);
			// $(this).hover(
			// 	function () {
			// 		play = true;
			// 	},
			// 	function () {
			// 		play = false;
			// 	}
			// );

			// let $cursor = $(this).find(".gallery-slider__cursor");

			// $(this).mousemove(function (e) {
			// 	gsap.to($cursor, 0.23, {
			// 		left: e.pageX,
			// 		top: e.pageY - $th.offset().top,
			// 		ease: Power4.easOut,
			// 	});

			// 	direction = "";
			// 	if (play && e.clientX < window.innerWidth / 3) {
			// 		play = true;
			// 		direction = "LEFT";

			// 		console.log("autoplay left");
			// 	}

			// 	if (
			// 		play &&
			// 		e.clientX > window.innerWidth - window.innerWidth / 3
			// 	) {
			// 		play = true;
			// 		direction = "RIGHT";
			// 		console.log("autoplay right");
			// 	}
			// });
		});

		const tilt = $(".js-tilt").tilt({
			perspective: 3000,
		});
	}
}

$(function(){})

$(function(){})

$(function(){})

function clubCard() {
	let card = $("#card-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#card-form button[type='submit']").attr("disabled", "disabled");
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					barba.go($("#card-form").data("thanks"));
				},
				error: function () {
					barba.go($("#card-form").data("error"));
				},
			});
		},
	});
}

$(function(){})
$(function () {
	function aos() {
		AOS.init({
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "is-inview", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom",
		});
	}
	components();
	// let scroll = new LocomotiveScroll({
	// 	el: document.querySelector("[data-aos-container]"),
	// 	smooth: true,
	// });
	// scroll.on("scroll", (args) => {
	// 	// Get all current elements : args.currentElements

	// 	if (typeof args.currentElements === "object") {
	// 		// let progress = args.currentElements["hhh"].progress;
	// 		let progress = 0;

	// 		for (key in args.currentElements) {
	// 			console.log(
	// 				$(args.currentElements[key].el).hasClass("two-photo")
	// 			);
	// 			if ($(args.currentElements[key].el).hasClass("two-photo")) {
	// 				let $th = $(args.currentElements[key].el);
	// 				$th.find(".two-photo__big:first-child").css(
	// 					"padding-right",
	// 					args.currentElements[key].progress * 174
	// 				);
	// 				$th.find(".two-photo__small:last-child").css(
	// 					"padding-left",
	// 					(1 - args.currentElements[key].progress) * 174
	// 				);
	// 				$th.find(".two-photo__big:last-child").css(
	// 					"padding-left",
	// 					args.currentElements[key].progress * 174
	// 				);
	// 				$th.find(".two-photo__small:first-child").css(
	// 					"padding-right",
	// 					(1 - args.currentElements[key].progress) * 174
	// 				);
	// 			}
	// 		}

	// 		// ouput log example: 0.34
	// 		// gsap example : myGsapAnimation.progress(progress);
	// 	}
	// });
	aos();
	bookTable();
	afisha();
	gallery();
	bookCorp();
	front();
	clubCard();
	barba.hooks.after(() => {
		console.log("after");
		aos();
	});
	barba.hooks.before(() => {
		setTimeout(function () {
			components();
			bookTable();
			afisha();
			gallery();
			clubCard();
			bookCorp();
			front();
		}, 100);
	});

	barba.init({
		transitions: [
			{
				sync: true,
				name: "card",
				from: {
					namespace: ["front"],
				},
				to: {
					namespace: ["chapter"],
				},
				beforeLeave() {
					gsap.to(".front-card", {
						top: 0,
						zIndex: 0,
						width: $(".front__swiper").width(),
						marginLeft: 0,
						duration: 0.2,
					});
				},
				afterLeave() {
					$("html").removeClass("_cards-aniimte  ");
					$(".cards-current").removeClass("cards-current");
					$(".cards-next").removeClass("cards-next");
					// $("html,body").scrollTo(0);

					console.log("afterLeave");
				},
				after(data) {
					console.log("after");
				},
				leave(data) {
					$("html,body").scrollTop(0);
					$("html").addClass("_cards-aniimte");
					$(data.current.container).addClass("cards-current");
					console.log("leave");

					return gsap.to(data.current.container, {
						opacity: 0,
						duration: 0.5,
					});
				},
				enter(data) {
					$(data.next.container).addClass("cards-next");
					setTimeout(function () {
						$(data.next.container).addClass("cards-next-anim");
					}, 50);
					return gsap.to(data.next.container, {
						duration: 1,
						y: 0,
						top: window.innerWidth <= 1024 ? 102 : 172,
					});
				},
			},
			{
				sync: true,
				name: "chapter",
				from: {
					namespace: ["chapter"],
				},
				to: {
					namespace: ["chapter"],
				},

				// beforeEnter(data) {
				// 	$(data.current.container).addClass("chapter-current");
				// },
				// beforeLeave(data) {
				// 	$("html,body").scrollTo(0);
				// 	$("html").addClass("_chapter-aniimte  ");
				// 	$(data.next.container).addClass("chapter-next");
				// },
				afterLeave() {
					$("html").removeClass("_chapter-aniimte  ");
					$(".chapter-current").removeClass("chapter-current");
					$(".chapter-next").removeClass("chapter-next");
					// $("html,body").scrollTo(0);
				},
				leave(data) {
					$("html,body").scrollTop(0);
					$("html").addClass("_chapter-aniimte");
					$(data.current.container).addClass("chapter-current");
					return gsap.to(data.current.container, {
						y:
							-1 * window.innerHeight +
							400 +
							(window.innerWidth <= 1024 ? 102 : 172) +
							(window.innerWidth <= 1024 ? 40 : 61),
						duration: 1,
					});
				},
				enter(data) {
					$(data.next.container).addClass("chapter-next");
					return gsap.to(data.next.container, {
						duration: 1,
						y: 0,
					});
				},
			},
		],
	});
});

// function footer() {
// 	$(".footer").append($('.footer__line'){})
// }
// $(function () {
// 	footer();
// });

function popup() {
	$(".popup-gallery__close").click(function () {
		$(".popup-gallery").fadeOut();
	});
	$(".popup-gallery__slider").each(function () {
		let $th = $(this);
		let speed = 2000;
		let swiper = new Swiper($th.find(".popup-gallery__swiper")[0], {
			observerParent: true,
			observerUpdate: true,
			observer: true,
			loop: true,
			slidesPerView: 1,
			loopedSlides: 7,
			// speed: speed,
			mousewheel: {
				forceToAxis: true,
			},
			spaceBetween: 20,
			breakpoints: {
				600: {
					spaceBetween: 50,
				},
				1300: {
					spaceBetween: 97,
				},
			},
		});
		// let hover = false;
		// let play = false;
		// let direction = "";
		// let t = 0;
		// let interval = setInterval(function () {
		// 	if (play) {
		// 		if (t == 0) {
		// 			if (direction == "LEFT") {
		// 				swiper.slidePrev();
		// 				console.log("left !!!!");
		// 			}
		// 			if (direction == "RIGHT") {
		// 				swiper.slideNext();
		// 			}
		// 		}
		// 		t += 100;
		// 		if (t == speed) {
		// 			t = 0;
		// 		}
		// 	}
		// }, 100);
		// $(this).hover(
		// 	function () {
		// 		play = true;
		// 	},
		// 	function () {
		// 		play = false;
		// 	}
		// );

		// let $cursor = $(this).find(".popup-gallery__cursor");

		// $(this).mousemove(function (e) {
		// 	gsap.to($cursor, 0.23, {
		// 		left: e.pageX,
		// 		top: e.pageY - $th.offset().top,
		// 		ease: Power4.easOut,
		// 	});

		// 	direction = "";
		// 	if (play && e.clientX < window.innerWidth / 3) {
		// 		play = true;
		// 		direction = "LEFT";

		// 		console.log("autoplay left");
		// 	}

		// 	if (play && e.clientX > window.innerWidth - window.innerWidth / 3) {
		// 		play = true;
		// 		direction = "RIGHT";
		// 		console.log("autoplay right");
		// 	}
		// });
	});
}
$(function () {
	popup();
});

function components() {
	$(".block__head").append('<span class="block__head-line"></span>');
	$(".block h2,.block .h2:not(a)").each(function () {
		console.log($(this));
		let $th = $(this);
		$(this).after('<div class="block__h2-lines h2">');
		$(this).wrap('<div class="block__h2-default">');
		var result = $(this)
			.html()
			.replace(/[\wа-яё,.!:;(&)\-]+/gim, function (s) {
				return s === "br" || s === "i" ? s : "<span>" + s + "</span>";
			});

		$(this).html(result);
		console.log(result);

		$(this)
			.find("i span")
			.each(function () {
				$(this).html("<i>" + $(this).text() + "</i>");
			});

		let range = 30;
		let line = 1;
		let lt = 0;

		$(this)
			.find("span,br")
			.each(function () {
				if ($(this).position().top >= lt + range) {
					line++;
					lt = $(this).position().top;
				}
				$(this).attr("line", line);
			});
		let lines = $(this)
			.closest(".block__h2-default")
			.next(".block__h2-lines");
		for (let i = 1; i < 30; i++) {
			let $line = $("<div>", {
				class: `block__h2-line-${i}`,
			});
			let flag = 0;
			$th.find("span[line='" + i + "']").each(function () {
				$line.append($(this).clone());
				$line.append(" ");
				flag = 1;
			});
			if (flag) {
				lines.append($line);
				$line.wrap('<div class="block__h2-line-wrap">');
			}
		}
	});
	window.addEventListener(
		"resize",
		function (event) {
			$(".block h2,.block .h2:not(a)").each(function () {
				let $th = $(this);
				let range = 30;
				let line = 1;
				let lt = 0;

				$(this)
					.find("span,br")
					.each(function () {
						if ($(this).position().top >= lt + range) {
							line++;
							lt = $(this).position().top;
						}
						$(this).attr("line", line);
					});
				let lines = $(this)
					.closest(".block__h2-default")
					.next(".block__h2-lines");
				lines.html("");
				for (let i = 1; i < 30; i++) {
					let $line = $("<div>", {
						class: `block__h2-line-${i}`,
					});
					let flag = 0;
					console.log($th.html());
					$th.find("span[line='" + i + "']").each(function () {
						$line.append($(this).clone());
						$line.append(" ");
						flag = 1;
					});
					if (flag) {
						lines.append($line);
						$line.wrap('<div class="block__h2-line-wrap">');
					}
				}
			});
		},
		true
	);

	if ($(".photo-slider").length) {
		$(".photo-slider").each(function () {
			let $th = $(this);
			let speed = 2000;
			let swiper = new Swiper($th.find(".photo-slider__swiper")[0], {
				centeredSlides: true,
				loop: true,
				loopedSlides: 7,
				observerParent: true,
				observerUpdate: true,
				observer: true,
				freemode: true,
				slidesPerView: "auto",
				// speed: speed,
				mousewheel: {
					forceToAxis: true,
				},
				preventClicks: false,
				spaceBetween: 20,
				breakpoints: {
					600: {
						spaceBetween: 100,
					},
					1300: {
						spaceBetween: 215,
					},
				},
				// autoplay: {
				// 	delay: 0,
				// },
			});
			// let hover = false;
			// let play = false;
			// let direction = "";
			// let t = 0;
			// let interval = setInterval(function () {
			// 	console.log();
			// 	if (play) {
			// 		if (t == 0) {
			// 			if (direction == "LEFT") {
			// 				swiper.slidePrev();
			// 			}
			// 			if (direction == "RIGHT") {
			// 				swiper.slideNext();
			// 			}
			// 		}
			// 		t += 100;
			// 		if (t == speed) {
			// 			t = 0;
			// 		}
			// 	}
			// }, 100);
			// $(this).hover(
			// 	function () {
			// 		play = true;
			// 	},
			// 	function () {
			// 		play = false;
			// 	}
			// );

			// let $cursor = $(this).find(".photo-slider__cursor");

			// $(this).mousemove(function (e) {
			// 	gsap.to($cursor, 0.23, {
			// 		left: e.pageX,
			// 		top: e.pageY - $th.offset().top,
			// 		ease: Power4.easOut,
			// 	});

			// 	direction = "";
			// 	if (play && e.clientX < window.innerWidth / 3) {
			// 		play = true;
			// 		direction = "LEFT";
			// 		t = 0;
			// 		console.log("autoplay left");
			// 	}

			// 	if (
			// 		play &&
			// 		e.clientX > window.innerWidth - window.innerWidth / 3
			// 	) {
			// 		t = 0;
			// 		play = true;
			// 		direction = "RIGHT";
			// 		console.log("autoplay right");
			// 	}
			// });
		});
	}

	$(".block__tabs .block__tab").click(function () {
		$(this)
			.closest(".block__tabs")
			.find(".block__tab")
			.removeClass("_active");
		$(this).addClass("_active");
		tabFilter();
	});
	function tabFilter() {
		$(".block__tab").each(function () {
			if ($(this).hasClass("_active")) {
				$($(this).data("tab")).removeClass("_d-none");
				// $(this).addClass("swiper-slide");
			} else {
				$($(this).data("tab")).addClass("_d-none");
				// $(this).removeClass("swiper-slide");
			}
		});
	}
	tabFilter();
	$(".air").each(function () {
		new AirDatepicker(this, {});
	});
	$(".select2-wrap").each(function () {
		$(this)
			.find(".select2")
			.select2({
				minimumResultsForSearch: -1,
				dropdownParent: $(this),
				placeholder: $(this).find(".select2").attr("placeholder"),
			});
	});

	$("._mask-phone").each(function () {
		$(this).inputmask("+7 999-999-99-99", {
			skipOptionalPartCharacter: " ",
		});
	});
	if ($("._mask-count").length) {
		var mc = new Cleave("._mask-count", {
			numeral: true,
			delimiter: " ",
			numeralThousandsGroupStyle: "thousand",
		});
	}
	if ($("._mask-price").length) {
		var mp = new Cleave("._mask-price", {
			numeral: true,
			delimiter: " ",
			prefix: " руб",
			tailPrefix: true,
			noImmediatePrefix: true,
			numeralThousandsGroupStyle: "thousand",
		});
	}
	if ($("._mask-date").length) {
		var md = new Cleave("._mask-date", {
			date: true,
			delimiter: ".",
			datePattern: ["d", "m", "Y"],
		});
	}
}

function header() {
	$(".header__open-menu").click(function () {
		$(".header").toggleClass("_open-menu");
	});
	$(".header-menu__item a").click(function () {
		$(".header").removeClass("_open-menu");
	});
	$(".header__contact").click(function () {
		$(".header").removeClass("_open-menu");
	});
}
$(function () {
	header();
});
