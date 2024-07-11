const data = [
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi', },
	{ id: 3, text: 'Greeting' }
];

export default function PhraseGallery() {
	let ind = 0;

	const handleClick = () => ind = ind + 1;

	return (
		<div>
			<p>{data[ind].text}</p>
			<button onClick={handleClick}>Next</button>
			<span>{ind + 1} of {data.length}</span>
		</div>
	);
}