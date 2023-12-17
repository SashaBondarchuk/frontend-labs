import React from "react";

class Content extends React.Component {
	render(): React.ReactNode {
		return (
			<div>
				<p>Хобі:</p>
				<ul>
					<li>Настільний теніс</li>
					<li>Велоспорт</li>
					<li>Комп'ютерні ігри</li>
				</ul>
				<p>Улюблені фільми:</p>
				<ol>
					<li>Оппенгеймер</li>
					<li>1 + 1</li>
					<li>Людина-павук: Додому шляху нема</li>
				</ol>
			</div>
		);
	}
}

export default Content;
