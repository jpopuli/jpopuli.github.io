(function () {
	emailjs.init('1g3Q8LMTqmiO-J8-y');
})();

window.onload = function () {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		// these IDs from the previous steps
		emailjs.sendForm('service_zo3eemc', 'template_gi5ijop', this).then(
			function () {
				document.getElementById('contact-form').reset();
				// Show the success modal
				let successModal = document.getElementById('success-modal');
				let bootstrapModal = new bootstrap.Modal(successModal);
				bootstrapModal.show();
			},
			function (error) {
				console.log('FAILED...', error);
			}
		);
	});
};
