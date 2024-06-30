export default function ShoppingCart({ products }) {
	const rows = products.map((product, ind) => (
		<tr key={ind}>
			<td>{product.name}</td>
			<td>1</td>
			<td>{product.price}</td>
		</tr>
	));

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Amount</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}