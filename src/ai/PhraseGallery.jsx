import { useState } from 'react';

const data = [
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi', },
	{ id: 3, text: 'Greeting' }
];

export default function PhraseGallery() {
	const [ind, setInd] = useState(0);

	const handleClick = () => {
		if (ind < data.length - 1) setInd(ind + 1);
	};

	return (
		<div>
			<p>{data[ind].text}</p>
			<button onClick={handleClick}>Next</button>
			<span>{ind + 1} of {data.length}</span>
		</div>
	);
}