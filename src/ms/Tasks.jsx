import { useState } from 'react';

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


export default function Tasks() {
	return (
		<div>
			<h1>Tasks</h1>
			<div>
				<input type="text" />
				<button>Add</button>
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