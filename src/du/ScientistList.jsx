import { useState } from 'react';

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];


export default function ScientistList() {
	const [profession, setProfession] = useState(people[0].profession);

	const options = people.map(person => <option key={person.id}>{person.profession}</option>);
	const allListItems = people.map(person => <li key={person.id}>{person.name}</li>);
	const filteredListItems = people
		.filter(person => person.profession === profession)
		.map(person => <li key={person.id}>{person.name}</li>);

	const onProfessionChanged = (e) => setProfession(e.target.value);

	return (
		<div>
			<ul>{allListItems}</ul>
			<div>
				<h3>Scientist by profession</h3>
				<ul>
					{filteredListItems}
				</ul>
			</div>
			<select value={profession} onChange={onProfessionChanged}>{options}</select>
		</div>
	);
}