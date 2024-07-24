import { useState } from 'react';

export default function Countres() {
	const [counters, setCounters] = useState([0, 0, 0, 0]);

	const handleIncrementCounter = (ind) => setCounters(counters.map((c, i) => i === ind ? c + 1: c));

	return (
		<div>
			{counters.map((c, i) => (
				<p key={i}>
					{c} {' '}
					<button onClick={() => handleIncrementCounter((i))}>Incr</button>
				</p>
			))}
		</div>
	);
}