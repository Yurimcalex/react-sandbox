export default function LogButton() {
	const handler = () => console.log('Log from LogButton');

	return (
		<button onClick={handler}>Press me to Log</button>
	);
}