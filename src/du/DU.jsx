import Animal from './Animal.jsx';
import NotesList from './NotesList.jsx';
import FancyBorder from './FancyBorder.jsx';
import FancyBackground from './FancyBackground.jsx';
import ShoppingList from './ShoppingList.jsx';
import ScientistList from './ScientistList';

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

			{/*<FancyBackground>
				<p>What is that?</p>
			</FancyBackground>*/}

			<ShoppingList
				list={[
					{name: 'Soda', isUrgent: true, purchased: true},
					{name: 'Chips', purchased: true},
					{name: 'Bread', purchased: true}
				]}
			/>

			<ScientistList />
		</div>
	);
}