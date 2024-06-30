import { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import TotalList from './TotalList';

export default function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState('');
	const [isStockOnly, setIsStockOnly] = useState(false);

	const [selectedProducts, setSelectedProducts] = useState([]);
	const onSelectProduct = (product) => setSelectedProducts([...selectedProducts, product]); 

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
				onSelectProduct={onSelectProduct}
			/>
			<ShoppingCart products={selectedProducts} />
			<TotalList products={selectedProducts} />
		</div>
	);
}