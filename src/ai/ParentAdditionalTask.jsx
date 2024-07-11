export default function ParentAdditionalTask() {
	const handleClick = () => console.log('Task from Parent!');

	return (
		<div>
			<hr/>
				<Button onClick={handleClick} />
			<hr/>
		</div>
	);
}

function Button({ onClick }) {
	return (
		<button onClick={() => {
			console.log('Task from button!');
			onClick();
		}}>
			Click Me!
		</button>
	);
}