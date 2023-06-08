const select = document.getElementById("custom-select");
if (select !== null) {
	select.addEventListener("click", () => {
		select.classList.toggle("hero__container-input-opened");
	});
}
