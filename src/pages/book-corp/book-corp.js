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
