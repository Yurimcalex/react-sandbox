import { useState } from 'react';

const data = [
	{
		id: 1,
		name: 'Yuri Boyka',
		text: 'It is a very cool fighter.'
	},
	{
		id: 2,
		name: 'Superman',
		text: 'He can fly!'
	}
];

export default function MovieHeroes() {
	const [activeIndex, setActiveIndex] = useState(data[0].id);

	return (
		<div>
			{data.map(hero => (
				<Panel
					key={hero.id}
					title={hero.name}
					isActive={activeIndex == hero.id}
					onShow={() => setActiveIndex(hero.id)}
				>
					<p>{hero.text}</p>
				</Panel>
			))}
		</div>
	);
}


function Panel({ title, children, isActive, onShow }) {

	return (
		<div>
			{isActive
				? (
						<>
							<h2>{title}</h2>
							<div>
								{children}
							</div>
						</>
					)
				: (
						<button onClick={onShow}>show</button>
					)
			}
		</div>
	);
}