import React, { useState } from "react";

function Form() {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
					<option key={number}>{number}</option>
				))}
			</select>
			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}

export default Form;
