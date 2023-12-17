import { useState } from "react";

const Header = () => {
	const [isSecondItemClicked, setIsSecondItemClicked] = useState(false);
	const [isItemAfterSecondClicked, setisItemAfterSecondClicked] =
		useState(false);

	return (
		<div>
			<h2>Бондарчук Олександр Андрійович</h2>
			<p
				className={isSecondItemClicked ? "click" : ""}
				onClick={() => setIsSecondItemClicked(!isSecondItemClicked)}
			>
				Дата і місце народження: 14 липня, 2004 року, м. Хмельницький
			</p>
			<p
				className={`next-after-second ${
					isItemAfterSecondClicked ? "second-element" : ""
				}`}
				onClick={() =>
					setisItemAfterSecondClicked(!isItemAfterSecondClicked)
				}
			>
				Освіта: ЗОШ №9, м. Кам'янець-Подільський, Хмельницька область;
				НТУУ "КПІ", м. Київ НТУУ "КПІ", м. Київ
			</p>
		</div>
	);
};

export default Header;
