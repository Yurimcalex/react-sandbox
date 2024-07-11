import { useState } from 'react';

export default function CounterWithInput() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<input type="text" />
			<button onClick={() => setCounter(counter + 1)}>Increase {counter}</button>
		</div>
	);
}