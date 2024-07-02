export default function ShoppingList({ list }) {
	const allPurchased = list.reduce((amount, item) => {
		if (item.purchased) return amount + 1;
		return amount;
	}, 0) === list.length;

	let purchasedItemsAmount = null;

	if (allPurchased) {
		purchasedItemsAmount = list.length;
	}

	return (
		<div>
			{allPurchased && <p>All items are purchased {purchasedItemsAmount}</p>}

			{list.length === 0
				? <span>There are no items in the list</span>
				: <ul>
				  	{list.map(l => <ShoppingListItem key={l.name} item={l} />)}
					</ul>}
		</div>
	);
}


function ShoppingListItem({ item }) {
	if (item.purchased) {
		return null;
	}

	if (item.isUrgent) {
		return <li>{item.name}, buy now!</li>;
	}
	return <li>{item.name}</li>;
}