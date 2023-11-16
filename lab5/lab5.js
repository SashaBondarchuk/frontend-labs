const form = document.getElementById("registrationForm");
const validationErrorClassName = "invalid-data";
const validationPassedClassName = "correct-data";

const PIBRegex = /^[А-Яа-яіІїЇ]{6}\s[А-Яа-яіІїЇ]{1}[.]\s[А-Яа-яіІїЇ]{1}[.]$/;
const groupRegex = /^[А-Яа-яіІїЇ]{2}[-][0-9]{2}$/;
const phoneRegex = /^[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{2}[-][0-9]{2}/;
const adressRegex = /^м[.]\s[А-Яа-яіІїЇ]{6}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const data = document.getElementById("data");
const pibValue = document.getElementById("pib-value");
const groupValue = document.getElementById("group-value");
const phoneValue = document.getElementById("phone-value");
const adressValue = document.getElementById("adress-value");
const emailValue = document.getElementById("email-value");

const validateField = (regex, field, value) => {
	const element = form[field];
	console.log(element);
	if (!regex.test(value)) {
		console.log(element);
		element.classList.add(validationErrorClassName);
		element.classList.remove(validationPassedClassName);
		return false;
	} else {
		element.classList.remove(validationErrorClassName);
		element.classList.add(validationPassedClassName);
		return true;
	}
};

const updateDisplayedValues = () => {
	const pibValid = validateField(PIBRegex, "pib", form["pib"].value);
	const groupValid = validateField(groupRegex, "group", form["group"].value);
	const phoneValid = validateField(phoneRegex, "phone", form["phone"].value);
	const adressValid = validateField(
		adressRegex,
		"adress",
		form["adress"].value
	);
	const emailValid = validateField(emailRegex, "email", form["email"].value);

	if (pibValid && groupValid && phoneValid && adressValid && emailValid) {
		pibValue.innerText = form["pib"].value;
		groupValue.innerText = form["group"].value;
		adressValue.innerText = form["adress"].value;
		phoneValue.innerText = form["phone"].value;
		emailValue.innerText = form["email"].value;

		data.classList.remove("data");
	}
};

form.addEventListener("submit", (event) => {
	updateDisplayedValues();
	event.preventDefault();
});

const table = document.getElementById("table");
const colorPalette = document.getElementById("color");

for (let i = 0; i < 6; i++) {
	const tr = document.createElement("tr");
	for (let j = 1; j <= 6; j++) {
		const td = document.createElement("td");
		const value = i * 6 + j;

		if (value === 10) {
			td.id = "tableVariant";
		}

		td.innerText = value;

		tr.appendChild(td);
	}
	table.appendChild(tr);
}

const tableVariant = document.getElementById("tableVariant");

tableVariant.addEventListener("mouseover", () => {
	const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

	tableVariant.style.backgroundColor = randomColor;
});

tableVariant.addEventListener("click", () => {
	tableVariant.style.backgroundColor = colorPalette.value;
});

tableVariant.addEventListener("dblclick", () => {
	const cells = tableVariant.parentElement.children;
	let prevCellChanged = false;
	let startChangingColor = false;

	for (let i = 0; i < cells.length; i++) {
		if (cells[i] === tableVariant) {
			startChangingColor = true;
		}

		if (startChangingColor && !prevCellChanged) {
			cells[i].style.backgroundColor = colorPalette.value;
			prevCellChanged = true;
		} else {
			prevCellChanged = false;
		}
	}
});
