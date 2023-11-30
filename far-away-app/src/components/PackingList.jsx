import React from "react";

function PackingList({ initialItems }) {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Items item={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

function Items({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>

			<button>❌</button>
		</li>
	);
}

export default PackingList;
