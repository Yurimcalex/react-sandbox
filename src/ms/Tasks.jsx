import { useState, useReducer } from 'react';

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

	const handleTaskDelete = (id) => setTasks(tasks.filter(task => task.id !== id));

	const handleTaskEdit = (id, text) => {
		setTasks(tasks.map((task) => {
			if (task.id === id) {
				return { ...task, text };
			}
			return task;
		}));
	};

	const handleTaskDone = (id) => {
		setTasks(tasks.map((task) => {
			if (task.id === id) {
				return { ...task, done: !task.done };
			}
			return task;
		}));
	};

	return (
		<div>
			<h1>Tasks</h1>
			<AddTask onTaskAdd={handleTaskAdd} />
			<TaskList 
				tasks={tasks}
				handleTaskDelete={handleTaskDelete}
				handleTaskEdit={handleTaskEdit}
				handleTaskDone={handleTaskDone}
			/>
		</div>
	);
}


function Task({ task, onTaskDelete, onTaskEdit, onTaskDone }) {
	const [isEditing, setIsEditing] = useState(false);
	const [text, setText] = useState(task.text);

	const handleSaveTask = (id, text) => {
		onTaskEdit(id, text);
		setIsEditing(false);
	};

	return (
		<div>
			<input type="checkbox" checked={task.done} onChange={() => onTaskDone(task.id)} />

			{isEditing ? <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> : task.text}

			{isEditing
				? <button onClick={() => handleSaveTask(task.id, text)}>Save</button>
				: <button onClick={() => setIsEditing(!isEditing)}>Edit</button>}
			
			<button onClick={() => onTaskDelete(task.id)}>Delele</button>
		</div>
	);
}


function TaskList({ tasks, handleTaskDelete, handleTaskEdit, handleTaskDone }) {
	return (
		<div>
			{tasks.map(task => 
				<Task 
					key={task.id}
					task={task}
					onTaskDelete={handleTaskDelete}
					onTaskEdit={handleTaskEdit}
					onTaskDone={handleTaskDone} />)}
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


function tasksReducer(tasks, action) {
	switch(action.type) {
		case 'task/added': {
			return [ 
				...tasks,
				{ id: nextId++, text: action.text, done: false } 
			];
		}

		case 'task/deleted': {
			return tasks.filter(task => task.id !== action.id);
		}

		case 'task/edited': {
			return tasks.map((task) => {
				if (task.id === action.id) {
					return { ...task, text };
				}
				return task;
			});
		}

		case 'task/toggled': {
			return tasks.map((task) => {
				if (task.id === action.id) {
					return { ...task, done: !task.done };
				}
				return task;
			});
		}
	}
}