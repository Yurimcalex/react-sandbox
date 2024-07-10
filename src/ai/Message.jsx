import { useState } from 'react';

export default function Message({ text }) {
	const [hidden, setHidden] = useState(true);

	const buttonText = hidden ? 'Show message' : 'Hide message';

	const handleClick = (e) => setHidden(!hidden);

	return (
		<div>
			<button onClick={handleClick}>{buttonText}</button> 
			Message: <span hidden={hidden}>{text}</span>
		</div>
	);
}