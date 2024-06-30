import { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

export default function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState('');
	const [isStockOnly, setIsStockOnly] = useState(false);

	return (
		<div>
			<SearchBar 
				filterText={filterText}
				isStockOnly={isStockOnly}
				onFilterTextChange={setFilterText}
				onIsStockOnlyChange={setIsStockOnly}
			/>
			<ProductTable 
				products={products}
				filterText={filterText}
				isStockOnly={isStockOnly}
			/>
		</div>
	);
}