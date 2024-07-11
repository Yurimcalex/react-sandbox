import { useState } from 'react';

export default function FormWithDelay() {
	const [text, setText] = useState('');
	const [receiver, setReceiver] = useState('Nick');

	const handleTextChange = (e) => setText(e.target.value);
	const handleReceiverChange = (e) => setReceiver(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTimeout(() => {
			console.log(`message: ${text}, for: ${receiver}`)
		}, 10000);
	};
	
	return (
		<div style={{border: '1px solid gray'}}>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleTextChange} />
				<br />
				<select value="Nick" onChange={handleReceiverChange}>
					<option value="Nick">Nick</option>
					<option value="Jesika">Jesica</option>
				</select>
				<button>Submit</button>
			</form>
		</div>
	);
}