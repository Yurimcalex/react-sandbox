import { useState } from 'react';

export default function InterestingQuestionForm() {
	const [answer, setAnswer] = useState('');
	const [error, setError] = useState(null);
	const [status, setStatus] = useState('typing');

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus('submitting');
		try {
			await submitForm(answer);
			setStatus('success');
		} catch (err) {
			setStatus('typing');
			setError(err);
		}
	};

	return (
		<div>
			<h3>An interesting question</h3>
			<Form
				status={status}
				answer={answer}
				setAnswer={setAnswer}
				error={error}
				submit={handleSubmit}
			/>
		</div>
	);
}


function Form({ status, answer, setAnswer, error, submit }) {
	if (status === 'success') {
		return <h1>Great choice!</h1>
	}

	return (
		<div>
			<h2>Do you want to get rich?</h2>
			<form onSubmit={submit}>
				<textarea 
					disabled={status === 'submitting'}
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<br />
				<button 
					type="submit"
					disabled={answer.length === 0 || status === 'submitting'}
				>
					Submit
				</button>
				{error !== null && <h2>{error.message}</h2>}
			</form>
		</div>
	);
}


function submitForm(answer) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let isError = answer.toLowerCase() !== 'yes';
			if (isError) {
				reject(new Error(`It's only up to you to live your life!`));
			} else {
				resolve();
			}
		}, 1500);
	});
}