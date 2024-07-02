export default function Animal({ name, data }) {
	return (
		<div>
			<h3>My name is {name}, I am a {data.kind}</h3>
			<p>
				I can 
				{data.skills.map(skill => <em key={skill}> <span>{skill}</span>, </em>)}
				I like
				{data.food.map(item => <em key={item}> <span>{item}</span>, </em>)}
				I am
				{data.isFriendly ? ' friendly': ' not friendly'}
				.
			</p>
		</div>
	);
}