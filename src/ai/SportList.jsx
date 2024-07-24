import { useState } from 'react';

const initialSports = [
	{ id: 1, name: 'football', checked: false },
	{ id: 2, name: 'gymnastics', checked: false }
];

export default function SportList() {
	const [sports, setSports] = useState(initialSports);
	const [sportName, setSportName] = useState('');

	const handleAddSport = () => {
		if (!sportName) return;
		setSports([...sports, { id: getId(), name: sportName }]);
		setSportName('');
	};

	const handleAddAtPos1 = () => {
		if (!sportName) return;
		setSports([
			...sports.slice(0, 1),
			{ id: getId(), name: sportName },
			...sports.slice(1)
		]);
		setSportName('');
	};

	const handleDeleteSport = (id) => {
		setSports(sports.filter(sport => sport.id !== id));
	};

	const handleListReverse = () => {
		setSports([...sports].reverse());
	};

	const handleCheckSport = (id) => {
		setSports(sports.map(sport => {
			if (sport.id === id) {
				return { ...sport, checked: !sport.checked};
			} else {
				return sport;
			}
		}));
	};

	return (
		<div>
			<div>
				<label>
					Add sport: <input type="text" value={sportName} onChange={(e) => setSportName(e.target.value)} />
				</label>
				<button onClick={handleAddSport}>Add</button>
				<button onClick={handleAddAtPos1}>Add at position 1</button>
				<button onClick={handleListReverse}>Reverse</button>
			</div>
			<ul>
				{sports.map((sport, i) => (
					<li key={sport.id}>
						#{i} - {sport.name} {sport.checked ? 'yes': 'no'}
						<button onClick={() => handleDeleteSport(sport.id)}>Delete</button>
						<input type="checkbox" value={sport.checked} onChange={() => handleCheckSport(sport.id)} />
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