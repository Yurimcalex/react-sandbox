import { useState } from 'react';

export default function ExperimentalCounter() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
		setCounter(counter + 1);
	};

	const handleClick1 = () => {
		alert(counter);
		setCounter(counter + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>Counter {counter}</button>
			<button onClick={handleClick1}>Blocking click!</button>
		</div>
	);
}