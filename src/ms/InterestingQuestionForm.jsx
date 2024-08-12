export default function InterestingQuestionForm() {
	return (
		<div>
			<Form />
		</div>
	);
}

function Form({ status = 'empty' }) {
	if (status === 'success') {
		return <div>Great choice!</div>
	}

	return (
		<div>
			<h2>Do you want to get rich?</h2>
			<form>
				<textarea />
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}