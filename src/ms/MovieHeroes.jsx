import { useState } from 'react';

export default function MovieHeroes() {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div>
			<Panel 
				title="Yuri Boyka" 
				isActive={activeIndex === 0}
				onShow={() => setActiveIndex(0)}
			>
				<p>It's a very cool fighter.</p>
			</Panel>

			<Panel
				title="Superman"
				isActive={activeIndex === 1}
				onShow={() => setActiveIndex(1)}
			>
				<p>He can fly!</p>
			</Panel>
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