export default function TotalList({ products }) {
	const list = {};

	products.forEach(product => {
		const {name, price} = product;
		if (name in list) {
			list[name].amount += 1;
		} else {
			list[name] = { name, price, amount: 1 };
		}
	});

	const listItems = Object.values(list).map(product => (
		<li key={product.name}>
			<span>{product.name}</span>{' '}
			<span>{product.amount}</span>{' '}
			<span>${product.price.slice(1) * product.amount}</span>
		</li>
	));

	return (
		<div>
			<ul>
				{listItems}
			</ul>
		</div>
	);
}