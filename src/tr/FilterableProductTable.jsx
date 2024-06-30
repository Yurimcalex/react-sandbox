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

	const onRemoveProduct = (product) => {
		const productInd = selectedProducts.findIndex(p => p.name === product.name);
		const updatedProducts = [
			...selectedProducts.slice(0, productInd),
			...selectedProducts.slice(productInd + 1)
		]; 
		setSelectedProducts(updatedProducts);
	};

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
			<ShoppingCart 
				products={selectedProducts}
				onRemoveProduct={onRemoveProduct}
			/>
			<TotalList products={selectedProducts} />
		</div>
	);
}