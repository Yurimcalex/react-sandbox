import Message from './Message.jsx';
import Button from './Button.jsx';
import Controls from './Controls.jsx';
import Toolbar from './Toolbar.jsx';

export default function AI() {
	return (
		<div>
			<Message text={"Some really funny message"}/>
			<div>
				<Button text={"Some interesting text..."} />
				<Button text={"Another interesting text..."} />
			</div>
			<Controls />
			<Toolbar 
				onPlaySong={() => console.log('the song is playing!')}
				onTurnOffLight={() => console.log('the light is turned off')}
			/>
		</div>
	);
}