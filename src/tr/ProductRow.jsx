export default function ProductRow({ product, onSelectProduct }) {
	const name = product.stocked
		? product.name
		: <span style={{ color: 'red' }}>{product.name}</span>;

	return (
		<tr>
			<td onClick={() => onSelectProduct(product)}>
				{name}
			</td>
			<td>{product.price}</td>
		</tr>
	);
}