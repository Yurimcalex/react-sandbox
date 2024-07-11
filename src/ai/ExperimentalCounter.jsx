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

	const handleClick2 = () => {
		setCounter(counter + 1);
		setTimeout(() => {
			console.log(counter);
		}, 3000);
	};

	const handleClick3 = () => {
		setCounter(n => n + 1);
		setCounter(n => n + 1);
	};

	return (
		<div>
			<button onClick={handleClick}>Counter {counter}</button>
			<button onClick={handleClick1}>Blocking click!</button>
			<button onClick={handleClick2}>Timer 3sec</button>
			<button onClick={handleClick3}>+2</button>
		</div>
	);
}