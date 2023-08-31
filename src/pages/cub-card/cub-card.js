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
