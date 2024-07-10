import Message from './Message.jsx';
import Button from './Button.jsx';

export default function AI() {
	return (
		<div>
			<Message text={"Some really funny message"}/>
			<div>
				<Button text={"Some interesting text..."} />
				<Button text={"Another interesting text..."} />
			</div>
		</div>
	);
}