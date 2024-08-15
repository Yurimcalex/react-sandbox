import { useState } from 'react';

export default function SmallChat() {
	const [recipient, setRecipient] = useState('John');

	const handleSubmit = async (recipient, message, e) => {
		e.preventDefault();
		try {
			const responce = await sendMessage(recipient, message);
			console.log(responce);
		} catch (err) {
			console.log(err);
		}
	};

	const handleRecipientChange = (name) => setRecipient(name);

	return (
		<div>
			<h1>Recipient: {recipient}</h1>
			<div>
				<Form key={recipient} recipient={recipient} onSend={handleSubmit} />
			</div>
			<br />
			<div>
				<button onClick={() => handleRecipientChange('John')}>send to John</button>
				<button onClick={() => handleRecipientChange('Alice')}>send to Alice</button>
				<button onClick={() => handleRecipientChange('Michael')}>send to Michael</button>
			</div>
		</div>
	);
}


function Form({ recipient, onSend }) {
	const [message, setMessage] = useState('');

	return (
		<form key={recipient} onSubmit={(e) => onSend(recipient, message, e)}>
			<textarea value={message} onChange={(e) => setMessage(e.target.value)} />
			<br />
			<button type="submit">Send</button>
		</form>
	);
}


function sendMessage(to, text) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ name: to, message: text });
		}, 2000);
	});
}