export default function Toolbar({ onPlaySong, onTurnOffLight }) {
	return (
		<div onClick={() => console.log('Toolbar is clicked!')}>
			<Button onClick={onPlaySong}>Play Song</Button>
			<Button onClick={onTurnOffLight}>Turn off light</Button>
		</div>
	);
}

function Button({ onClick, children }) {
	return <button onClick={onClick}>{children}</button>;
}