import React from "react";

function PackingList({ items, onDeleteItem }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Items item={item} key={item.id} onDeleteItem={onDeleteItem} />
				))}
			</ul>
		</div>
	);
}

function Items({ item, onDeleteItem }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>

			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

export default PackingList;
