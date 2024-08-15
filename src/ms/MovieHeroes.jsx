import { useState } from 'react';

export default function MovieHeroes() {
	return (
		<div>
			<Panel title="Yuri Boyka">
				<p>It's a very cool fighter.</p>
			</Panel>

			<Panel title="Superman">
				<p>He can fly!</p>
			</Panel>
		</div>
	);
}


function Panel({ title, children }) {
	const [isActive, setIsActive] = useState(false);


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
						<button onClick={() => setIsActive(true)}>show</button>
					)
			}
		</div>
	);
}