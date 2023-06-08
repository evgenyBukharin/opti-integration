const plusBtn = document.querySelector(".hero__button-plus");
const minusBtn = document.querySelector(".hero__button-minus");
let rowsContainer = document.querySelector(".hero__container-rows");

if (plusBtn !== null && rowsContainer !== null) {
	plusBtn.addEventListener("click", () => {
		rowsContainer = document.querySelector(".hero__container-rows");
		rows = document.querySelectorAll(".hero__container-row");
		const rowTemplate = rows[rows.length - 1].cloneNode(true);
		const childred = Array.from(rowTemplate.children);
		childred.forEach((child) => {
			if (child.tagName == "INPUT") {
				child.setAttribute("id", childred.length + +child.getAttribute("id"));
				child.setAttribute("name", childred.length + +child.getAttribute("name"));
			} else {
				innerInput = child.querySelector("input");
				child.setAttribute("for", childred.length + +child.getAttribute("for"));
				innerInput.setAttribute("id", childred.length + +innerInput.getAttribute("id"));
				innerInput.setAttribute("name", childred.length + +innerInput.getAttribute("name"));

				// слушатель для появления галочки в инпуте
				innerInput.addEventListener("change", () => {
					child.classList.toggle("hero__label-checkbox-mark-active");
				});
			}
		});
		rowsContainer.appendChild(rowTemplate);
	});
}

if (minusBtn !== null && rowsContainer !== null) {
	minusBtn.addEventListener("click", () => {
		rows = document.querySelectorAll(".hero__container-row");
		if (rows.length > 2) {
			rowsContainer.removeChild(rowsContainer.lastElementChild);
		}
	});
}
