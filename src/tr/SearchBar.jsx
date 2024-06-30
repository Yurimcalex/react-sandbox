export default function SearchBar({ 
	filterText,
	isStockOnly,
	onFilterTextChange,
	onIsStockOnlyChange
}) {
	return (
		<form>
			<input 
				type="text"
				placeholder="Search..."
				value={filterText}
				onChange={(e) => onFilterTextChange(e.target.value)}
			/>
			<br />
			<label>
				<input 
					type="checkbox"
					checked={isStockOnly}
					onChange={(e) => onIsStockOnlyChange(e.target.checked)}
				/>
				{' '}
				Only show products in stock
			</label>
		</form>
	);
}