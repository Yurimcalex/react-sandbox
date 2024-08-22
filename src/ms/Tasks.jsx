import { useState } from 'react';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


export default function Tasks() {
	const [tasks, setTasks] = useState(initialTasks);
	const [text, setText] = useState('');

	const handleTaskAdd = (text) => {
		setTasks([...tasks, { id: nextId++, text, done: false }]);
	};

	console.log(tasks);

	return (
		<div>
			<h1>Tasks</h1>
			<div>
				<input type="text" onChange={(e) => setText(e.target.value)} />
				<button onClick={() => handleTaskAdd(text)}>Add</button>
			</div>
			
			<div>
				{initialTasks.map(task => (
					<div key={task.id}>
						<input type="checkbox" checked={task.done} />
						{task.text}
						<button>Edit</button>
						<button>Delele</button>
					</div>
				))}
			</div>
		</div>
	);
}