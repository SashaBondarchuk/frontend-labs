import "bootstrap/dist/css/bootstrap.css";
import GoodsCard from "./GoodsCard";

export interface ICard {
	imagePath: string;
	name: string;
	price: number;
}

const cards: ICard[] = [
	{
    imagePath: "https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg",
		name: "Apple",
		price: 45,
	},
	{
		imagePath: "https://t3.ftcdn.net/jpg/03/00/59/16/360_F_300591692_sE2Zpz9hoU0H1Klz0JzRw1F74HO7vWne.jpg",
		name: "Peach",
		price: 13,
	},
	{
		imagePath: "https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9kg_3pMeBKYnHHjx2JECF61QwzxTikLaQ2w-6A5tOO0=",
		name: "Grape",
		price: 234,
	},
	{
		imagePath: "https://pics.craiyon.com/2023-07-27/e84837b3e8ac4011880a7956c4253c11.webp",
		name: "Kiwi",
		price: 54,
	},
	{
		imagePath: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/27/0/HEW_Pears_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1371612039080.jpeg",
		name: "Pear",
		price: 34,
	},
	{
		imagePath: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/lemon-health-benefits-1296x728-feature.jpg?w=1155&h=1528",
		name: "Lemon",
		price: 213,
	},
];

const Task2 = () => {
	return (
		<div className="d-flex flex-wrap align-items-center justify-content-center max-width">
			{cards.map((card) => (
				<GoodsCard {...card} />
			))}
		</div>
	);
};

export default Task2;
