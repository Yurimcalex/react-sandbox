import Animal from './Animal.jsx';

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
		</div>
	);
}