export default function Controls() {
	const handlePlay = () => console.log('play');
	const handlePause = () => console.log('pause');

	return (
		<div>
			<Button onClick={handlePlay}>Play</Button>
			<Button onClick={handlePause}>Pause</Button>
		</div>
	);
}


function Button({ onClick, children }) {
	return <button onClick={onClick}>{children}</button>;
}