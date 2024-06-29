import './QS.css';
import MyButton from './MyButton.jsx';
import CommonGreeting from './CommonGreeting.jsx';
import TennisPlayer from './TennisPlayer.jsx';
import Question from './Question.jsx';
import Cars from './Cars.jsx';

export default function QS() {
	return (
		<div>
			<h1>What a cool app!</h1>
			<MyButton />
			<CommonGreeting />
			<TennisPlayer />
			<Cars />
		</div>
	);
}