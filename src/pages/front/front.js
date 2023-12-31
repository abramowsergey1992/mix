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
