export default function ShoppingList({ list }) {
	return (
		<div>
			<ul>
				{list.map(l => <ShoppingListItem key={l.name} item={l} />)}
			</ul>
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