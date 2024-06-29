export default function Question() {
	let showFruit = confirm('Do you want to see a fruit?');
	let showVegetable;

	let Component;
	if (showFruit) {
		Component = Banana;
	} else {
		showVegetable = confirm('Maybe you want a vegetable?');
	}

	return (
		<div>
			{ showFruit && <Banana/> }
			{ showVegetable 
				? <p>Beet root</p> 
				: <p>I see, you don't hungry.</p> }
		</div>
	);
}

function Banana() {
	return <p>Banana</p>;
}