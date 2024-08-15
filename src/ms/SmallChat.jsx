import { useState } from 'react';

export default function SmallChat() {
	const [recipient, setRecipient] = useState('John');
	const [status, setStatus] = useState('typing');
	const [message, setMessage] = useState('');

	const handleSubmit = async (recipient, message, e) => {
		e.preventDefault();
		try {
			setStatus('sending');
			const responce = await sendMessage(recipient, message);
			console.log(responce);
			setStatus('sent');
		} catch (err) {
			console.log(err);
		}
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
		setStatus('typing');
	};

	const handleRecipientChange = (name) => {
		setRecipient(name);
		setMessage('');
	};

	return (
		<div>
			<h1>Recipient: {recipient}</h1>
			<div>
				<Form 
					key={recipient}
					status={status}
					recipient={recipient}
					message={message}
					onSend={handleSubmit}
					onMessageChange={handleMessageChange} />
			</div>
			<br />
			<div>
				<button onClick={() => handleRecipientChange('John')} disabled={status === 'sending'}>send to John</button>
				<button onClick={() => handleRecipientChange('Alice')} disabled={status === 'sending'}>send to Alice</button>
				<button onClick={() => handleRecipientChange('Michael')} disabled={status === 'sending'}>send to Michael</button>
			</div>
			{status === 'sent' && <div>message: {message} is delivered to - {recipient}</div>}
		</div>
	);
}


function Form({ recipient, message, status, onSend, onMessageChange }) {
	return (
		<form key={recipient} onSubmit={(e) => onSend(recipient, message, e)}>
			<textarea 
				value={message}
				onChange={onMessageChange}
				disabled={status === 'sending'}
			/>
			<br />
			<button type="submit" disabled={status === 'sending'}>Send</button>
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