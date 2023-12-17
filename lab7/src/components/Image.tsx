import { useState } from "react";

const Image = () => {
	const [toShowImage, setToShowImage] = useState(false);
	const [imageWidth, setImageWidth] = useState(400);

	const increaseSizeOfImage = () => {
		if (imageWidth <= 1000) {
			setImageWidth((prev) => prev + 50);
		}
	};

	const decreaseSizeOfImage = () => {
		if (imageWidth > 50) {
			setImageWidth((prev) => prev - 50);
		}
	};

	return (
		<>
			<div className="mb-3">
				<p>
					Прага – дуже колоритне, навіть трохи магічне місто із
					цікавою історією і легендами про алхіміків. Його атмосфера
					не залишить байдужим нікого: вузенькі вулички з бруківкою,
					червона черепиця на дахах, готичні собори та замки,
					величезна кількість маленьких затишних кафе. Ну і як без
					національної гордості – чеського пива … справжній
					туристичний рай!
				</p>
				<a href="https://www.moyaeuropa.com.ua/czech/prague/">
					<img
						src="https://images.gostudy.cz/images/2023/02/prague-.jpg"
						alt="prague"
						width="400"
					/>
				</a>
			</div>
			{toShowImage && (
				<img
					src="https://cdn.mos.cms.futurecdn.net/5WUroWJ3ECE9pk9vBhXiqP-1200-80.png"
					alt="prague"
					width={imageWidth}
				/>
			)}
			<div className="mt-3 gap-3 d-flex">
				<button onClick={() => setToShowImage(true)}>Додати</button>
				<button onClick={increaseSizeOfImage}>Збільшити</button>
				<button onClick={decreaseSizeOfImage}>Зменшити</button>
				<button onClick={() => setToShowImage(false)}>Видалити</button>
			</div>
		</>
	);
};

export default Image;
