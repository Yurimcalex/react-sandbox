import Message from './Message.jsx';
import Button from './Button.jsx';
import Controls from './Controls.jsx';
import Toolbar from './Toolbar.jsx';
import ClickCatcher from './ClickCatcher.jsx';
import ParentAdditionalTask from './ParentAdditionalTask.jsx';
import EmptyForm from './EmptyForm.jsx';
import PhraseGallery from './PhraseGallery.jsx';
import CounterWithInput from './CounterWithInput.jsx';
import ExperimentalCounter from './ExperimentalCounter.jsx';
import FormWithDelay from './FormWithDelay.jsx';
import FavoriteCarForm from './FavoriteCarForm.jsx';
import MovingSquare from './MovingSquare.jsx';
import EmployeeForm from './EmployeeForm.jsx';

export default function AI() {
	return (
		<div>
			<Message text={"Some really funny message"}/>
			<div>
				<Button text={"Some interesting text..."} />
				<Button text={"Another interesting text..."} />
			</div>
			<Controls />
			<ClickCatcher>
				<Toolbar 
					onPlaySong={() => console.log('the song is playing!')}
					onTurnOffLight={() => console.log('the light is turned off')}
				/>
			</ClickCatcher>

			<ParentAdditionalTask />
			<EmptyForm />

			<PhraseGallery />
			<CounterWithInput />
			<ExperimentalCounter />

			<FormWithDelay />
			<FavoriteCarForm />

			<MovingSquare />
			<EmployeeForm />
		</div>
	);
}