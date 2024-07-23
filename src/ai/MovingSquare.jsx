import { useState } from 'react';

export default function MovingSquare() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

	return (
		<div 
			onMouseMove={handleMouseMove}
			style={{
				position: 'relative',
				width: '300px',
				height: '300px',
				border: '1px solid gray'}}
			>
			<div style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				width: '150px',
				height: '30px',
				background: 'gray',
				transform: 'translate(-50%)'
				// transform: `translate(${position.x}px, ${position.y}px)`
			}}>
				x:{position.x}, y:{position.y}
			</div>
		</div>
	);
}