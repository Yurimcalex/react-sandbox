import { useState } from 'react';

export default function ExperimentalCounter() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(counter + 1);
		setCounter(counter + 1);
	};

	return (
		<button onClick={handleClick}>Counter {counter}</button>
	);
}