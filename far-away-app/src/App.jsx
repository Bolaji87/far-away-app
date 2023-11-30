import React, { useState } from "react";
import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "charger", quantity: 12, packed: true },
];

function App() {
	const [items, setItems] = useState(initialItems);

	function handleAddItem(newItem) {
		setItems((items) => [...items, newItem]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<PackingList items={items} onDeleteItem={handleDeleteItem} />
			<Stats />
		</div>
	);
}

export default App;
