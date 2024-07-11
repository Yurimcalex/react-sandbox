export default function EmptyForm() {
	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			console.log('Submitting an empty form!');
		}}>
			<p>Hello, I am an empty form</p>
			<button>Submit</button>
		</form>
	);
}