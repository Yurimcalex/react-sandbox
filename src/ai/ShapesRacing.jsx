import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapesRacing() {
	const [shapes, setShapes] = useState(initialShapes);

	return (
		<div>
			<div style={{
				position: 'relative',
				height: '90vh',
				background: 'lightgray'
			}}>
				{shapes.map(shape => (
					<div style={{
						position: 'absolute',
						left: `${shape.x}px`,
						top: `${shape.y}px`,
						width: '30px',
						height: '30px',
						background: 'indigo',
						borderRadius: `${shape.type === 'circle' ? '50%' : '3px'}`
					}}>
						
					</div>
				))}
			</div>
			<button>Go!</button>
		</div>
	);
}