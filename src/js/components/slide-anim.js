const mainButton = document.querySelector(".hero__button-main");
const slideBlock = document.querySelector(".hero__container-slide");
if (mainButton !== null && slideBlock !== null) {
	mainButton.addEventListener("click", () => {
		slideBlock.classList.add("hero__container-slide-hidden");
	});
}
