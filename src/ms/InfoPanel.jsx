import { useState } from 'react';

export default function InfoPanel() {
	const [color, setColor] = useState('blue');

	const handleColorChange = (e) => setColor(e.target.value);

	return (
		<div>
			<Border color={color}>
				<p>Some info ...</p>
			</Border>
			
			<div>
				<select value={color} onChange={handleColorChange}>
					<option>red</option>
					<option>green</option>
					<option>blue</option>
				</select>
			</div>
		</div>
	);
}

function Border({ color, children }) {
	const [bc, setBc] = useState(color);

	return (
		<div style={{ border: `3px solid ${bc}` }}>
			{children}
		</div>
	);
}