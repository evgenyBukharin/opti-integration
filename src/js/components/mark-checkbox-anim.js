const markLabel = document.querySelectorAll(".hero__label-checkbox-mark");
if (markLabel.length > 0) {
	markLabel.forEach((label) => {
		input = label.querySelector("input[type=checkbox]");
		input.addEventListener("change", () => {
			label.classList.toggle("hero__label-checkbox-mark-active");
		});
	});
}
