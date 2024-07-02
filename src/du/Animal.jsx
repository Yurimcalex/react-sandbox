export default function Animal({ name, data }) {
	return (
		<div>
			<h3>My name is {name}, I am a {data.kind}</h3>
			<p>
				I can 
				{data.skills.map(skill => <> <span>{skill}</span>, </>)}
				I like
				{data.food.map(item => <> <span>{item}</span>, </>)}
				I am
				{data.isFriendly ? ' friendly': ' not friendly'}
				.
			</p>
		</div>
	);
}