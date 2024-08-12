export default function InterestingQuestionForm() {
	return (
		<div>
			<h3>An interesting question</h3>
			<Form />
		</div>
	);
}

// status: empty | submitting | error | success
function Form({ status = 'error' }) {
	if (status === 'success') {
		return <h1>Great choice!</h1>
	}

	return (
		<div>
			<h2>Do you want to get rich?</h2>
			<form>
				<textarea 
					disabled={status === 'submitting'}
				/>
				<br />
				<button 
					type="submit"
					disabled={status === 'submitting' || status === 'empty'}
				>
					Submit
				</button>
				{status === 'error' && <h2>It's only up to you to live your life!</h2>}
			</form>
		</div>
	);
}