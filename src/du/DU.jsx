import Animal from './Animal.jsx';
import NotesList from './NotesList.jsx';
import FancyBorder from './FancyBorder.jsx';

export default function DU() {
	return (
		<div>
			<Animal
				key={1}
				name="Bob"
				data={{
					kind: 'Lion',
					skills: ['run', 'jump', 'roar', 'fight'],
					food: ['apples'],
					isFriendly: true
				}}
			/>
			<Animal
			key={2}
				name="Ann"
				data={{
					kind: 'Sparrow',
					skills: ['fly', 'hop', 'chirp'],
					food: ['oranges']
				}}
			/>

			<div>
				<NotesList 
					notes={['one', 'two']}
				/>
				<NotesList
					notes={['Hello', 'Hi', 'Greeting']}
					isList={false}
				/>
			</div>

			<FancyBorder>
				<p>Some content</p>
			</FancyBorder>
		</div>
	);
}