import { useState } from 'react';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


export default function Tasks() {
	const [tasks, setTasks] = useState(initialTasks);
	

	const handleTaskAdd = (text) => {
		setTasks([...tasks, { id: nextId++, text, done: false }]);
	};

	return (
		<div>
			<h1>Tasks</h1>
			<AddTask onTaskAdd={handleTaskAdd} />
			<TaskList tasks={tasks} />
		</div>
	);
}


function TaskList({ tasks }) {
	return (
		<div>
			{tasks.map(task => (
				<div key={task.id}>
					<input type="checkbox" checked={task.done} />
					{task.text}
					<button>Edit</button>
					<button>Delele</button>
				</div>
			))}
		</div>
	);
}


function AddTask({ onTaskAdd }) {
	const [text, setText] = useState('');
	return (
		<div>
			<input type="text" onChange={(e) => setText(e.target.value)} />
			<button onClick={() => onTaskAdd(text)}>Add</button>
		</div>
	);
}