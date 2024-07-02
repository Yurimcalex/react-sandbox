import { useState } from 'react';

const COLORS = ['red', 'green', 'blue'];
let timer;

export default function FancyBackground({ children }) {
	const [colorInd, setSolorInd] = useState(0);

	clearInterval(timer);

	timer = setInterval(() => {
		const newInd = Math.floor(Math.random() * COLORS.length);
		setSolorInd(newInd);
	}, 3000);

	return (
		<div
			style={{
				background: COLORS[colorInd]
			}}
		>
			{children}
		</div>
	);
}