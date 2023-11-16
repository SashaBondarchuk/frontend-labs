const refs = {
	firstEl: document.getElementById("first-el-js"),
	secondEl: document.querySelector(".second-el-js"),
	addImageBtn: document.querySelector(".add-image"),
	enlargeImageBtn: document.querySelector(".enlarge-image"),
	reduceImageBtn: document.querySelector(".reduce-image"),
	deleteImageBtn: document.querySelector(".delete-image"),
    images: document.querySelector(".images"),
};

let isImageOnThePage = false;

refs.firstEl.addEventListener("click", () => {
	refs.firstEl.classList.toggle("first-el");
});

refs.secondEl.addEventListener("click", () => {
	refs.secondEl.classList.toggle("second-el");
});

refs.addImageBtn.addEventListener("click", () => {
	if (isImageOnThePage) {
		return;
	}

	const img = document.createElement("img");
	img.id = "inserted-img";
	img.src = "images/prague.jpeg";
	img.width = "500";

    refs.images.insertAdjacentElement("beforeEnd", img);

	isImageOnThePage = true;
});

refs.enlargeImageBtn.addEventListener("click", () => {
	if (!isImageOnThePage) {
		return;
	}

	const img = document.getElementById("inserted-img");
	if (img.width <= 1000) {
		img.width += 50;
	}
});

refs.reduceImageBtn.addEventListener("click", () => {
	if (!isImageOnThePage) {
		return;
	}

	const img = document.getElementById("inserted-img");
	if (img.width > 50) {
		img.width -= 50;
	}
});

refs.deleteImageBtn.addEventListener("click", () => {
	if (!isImageOnThePage) {
		return;
	}

	const img = document.getElementById("inserted-img");
	refs.images.removeChild(img);

	isImageOnThePage = false;
});
