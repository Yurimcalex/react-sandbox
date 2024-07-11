import { useState } from 'react';

export default function FavoriteCarForm() {
	const [car, setCar] = useState('Subary');
	const [disabled, setDisabled] = useState(false);

	const handleCarChange = (e) => setCar(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabled(true);

		setTimeout(() => {
			console.log(`Your request is received! - ${car}`);
			setDisabled(false);
		}, 5000);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<span>Choose your favorite car</span>
				<select value={car} onChange={handleCarChange}>
					<option value="Subary">Subary</option>
					<option value="Toyota">Toyota</option>
					<option value="Nissan">Nissan</option>
				</select>
				<button disabled={disabled}>Submit</button>
			</form>
		</div>
	);
}