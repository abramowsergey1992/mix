function header() {
	$(".header__open-menu").click(function () {
		$(".header").toggleClass("_open-menu");
	});
}
$(function () {
	header();
});
