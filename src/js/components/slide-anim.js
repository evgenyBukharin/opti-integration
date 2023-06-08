const mainButton = document.querySelector(".hero__button-main");
const slideBlock = document.querySelector(".hero__container-slide");
const integrationBlock = document.querySelector(".hero__container-integration");
if (mainButton !== null && slideBlock !== null && integrationBlock !== null) {
	mainButton.addEventListener("click", () => {
		slideBlock.classList.add("hero__container-slide-hidden");
		integrationBlock.classList.add("hero__container-integration-visible");
	});
}
