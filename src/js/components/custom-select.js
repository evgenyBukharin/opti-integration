const select = document.getElementById("custom-select");
const valueElem = select.querySelector(".hero__text-select");
if (select !== null && valueElem !== null) {
	select.addEventListener("click", () => {
		select.classList.toggle("hero__container-input-opened");
	});
	valueElem.addEventListener("click", (e) => {
		e.stopPropagation();
		select.classList.toggle("hero__container-input-opened");
	});
	document.addEventListener("click", (e) => {
		if (e.target !== select && e.target !== valueElem) {
			select.classList.remove("hero__container-input-opened");
		}
	});
}

const selectItems = select.querySelectorAll(".hero__item-select");
if (selectItems.length > 0) {
	selectItems.forEach((item) => {
		item.addEventListener("click", () => {
			valueElem.setAttribute("data-value", item.getAttribute("data-value"));
			valueElem.innerHTML = item.innerHTML;
		});
	});
}
