import React, { useState } from "react";

function PackingList({ items, onDeleteItem, OnToggleItem, onClearList }) {
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;
	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description")
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));

	if (sortBy === "packed")
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Items
						item={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						OnToggleItem={OnToggleItem}
					/>
				))}
			</ul>

			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
		</div>
	);
}

function Items({ item, onDeleteItem, OnToggleItem }) {
	return (
		<li>
			<input
				type="checkbox"
				value={item.packed}
				onChange={(e) => OnToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>

			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

export default PackingList;
