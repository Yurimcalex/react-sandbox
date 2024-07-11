import { useState } from 'react';

const data = [
	{ id: 1, text: 'Hello', author: 'Bob' },
	{ id: 2, text: 'Hi', author: 'Mark' },
	{ id: 3, text: 'Greeting', author: 'Anna' }
];

export default function PhraseGallery() {
	const [ind, setInd] = useState(0);
	const [showAuthor, setShowAuthor] = useState(false);

	const handleClick = () => {
		if (ind < data.length - 1) setInd(ind + 1);
	};

	return (
		<div>
			<p>{data[ind].text}</p>
			<button onClick={handleClick}>Next</button>
			<span>{ind + 1} of {data.length}</span>

			<button onClick={() => setShowAuthor(!showAuthor)}>{showAuthor ? 'Hide': 'Show'} Author</button>
			{showAuthor && <p>{data[ind].author}</p>}
		</div>
	);
}