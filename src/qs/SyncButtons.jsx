import { useState } from 'react';

export default function SyncButtons() {
	const [count, setCount] = useState(0);

	const clickHandler = () => setCount(count + 1);

	return (
		<div>
			<span>Sync buttons</span>
			<Button 
				content="First"
				count={count}
				handler={clickHandler}
			/>
			<Button 
				content="Second"
				count={count}
				handler={clickHandler}
			/>
		</div>
	);
}

function Button({ content, count, handler }) {
	return <button onClick={handler}>{content} {count}</button>
}