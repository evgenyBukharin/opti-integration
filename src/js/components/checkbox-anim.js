const checkboxList = document.querySelector(".hero__list-checkboxes");
const inputs = checkboxList.querySelectorAll(".hero__input-checkbox");
const labels = checkboxList.querySelectorAll(".hero__label-checkbox");
const labelTextElems = checkboxList.querySelectorAll(".hero__text");
if (checkboxList !== null && inputs.length > 0 && labels.length > 0 && labels.length > 0) {
	inputs.forEach((input, idx) => {
		input.addEventListener("change", () => {
			let label = labels[idx];
			let labelText = labelTextElems[idx];
			label.classList.toggle("hero__label-checkbox-active");
			if (label.classList.contains("hero__label-checkbox-active")) {
				labelText.innerHTML = labelText.getAttribute("data-future-text");
			} else {
				labelText.innerHTML = labelText.getAttribute("data-default-text");
			}
		});
	});
}
