const list = [
	{ id: 1, brand: 'Jeep' },
	{ id: 2, brand: 'Chevrolet' },
	{ id: 3, brand: 'SungYong' }
];

export default function Cars() {
	let listItems = list.map(car => <li key={car.id}>{car.brand}</li>)

	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	);
}