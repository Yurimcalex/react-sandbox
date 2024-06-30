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
			<span>${calcPrice(product)}</span>
		</li>
	));

	const totalSum = Object.values(list).reduce((sum, product) => sum += calcPrice(product), 0);

	return (
		<div>
			<ul>
				{listItems}
			</ul>
			<div>Total sum: ${totalSum}</div>
		</div>
	);
}

function calcPrice({ price, amount }) {
	return price.slice(1) * amount;
}