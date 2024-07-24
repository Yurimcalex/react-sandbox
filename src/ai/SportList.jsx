import { useState } from 'react';

const initialSports = [
	{ id: 1, name: 'football' },
	{ id: 2, name: 'gymnastics' }
];

export default function SportList() {
	const [sports, setSports] = useState(initialSports);
	const [sportName, setSportName] = useState('');

	const handleAddSport = () => {
		if (!sportName) return;
		setSports([...sports, { id: getId(), name: sportName }]);
		setSportName('');
	};

	const handleDeleteSport = (id) => {
		setSports(sports.filter(sport => sport.id !== id));
	};

	return (
		<div>
			<div>
				<label>
					Add sport: <input type="text" value={sportName} onChange={(e) => setSportName(e.target.value)} />
				</label>
				<button onClick={handleAddSport}>Add</button>
			</div>
			<ul>
				{sports.map(sport => (
					<li key={sport.id}>
						{sport.name}
						<button onClick={() => handleDeleteSport(sport.id)}>Delete</button>
					</li>
				))}
			</ul>		
		</div>
	);
}


let currId = 2;
function getId() {
	return ++currId;
}