import { useState } from 'react';

export default function FancyCounter() {
	const [isFancy, setIsFancy] = useState(false);

	return (
		<div>
			{isFancy ? <div><Counter color="lightgray" /></div> : <Counter />}
			<label>
				<span>enable fancy</span>
				<input type="checkbox" checked={isFancy} onChange={() => setIsFancy(!isFancy)} />
			</label>
		</div>
	);
}


function Counter({ color }) {
	const [counter, setCounter] = useState(0);

	return (
		<div style={{ background: color ? color : '' }}>
			{counter}
			<button onClick={() => setCounter(counter + 1)}>Add</button>
		</div>
	);
}