import { useState } from 'react';

export default function CounterWithInput() {
	const [counter, setCounter] = useState(0);
	const [text, setText] = useState('');

	const handleInputChange = (e) => {
		const text = e.target.value;
		setText(text);

		if (parseInt(text)) {
			setCounter(parseInt(text));
		}
	};

	console.log('CounterWithInput rendered!');

	return (
		<div>
			<input type="text" onChange={handleInputChange} />
			<button onClick={() => setCounter(counter + 1)}>Increase {counter}</button>
		</div>
	);
}