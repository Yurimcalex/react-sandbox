import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

export default function FilterableProductTable({ products }) {
	return (
		<div>
			<SearchBar />
			<ProductTable products={products} />
		</div>
	);
}