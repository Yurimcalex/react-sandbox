import { useState } from 'react';

export default function EmployeeForm() {
	const [employee, setEmployee]	= useState({
		firstName: 'Sarah',
		lastName: 'Blinkovich',
		skills: 'I can sing!',
		hobbii: {
			name: 'Knitting',
			duration: 3
		}
	});

	const handleFieldChange = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value });

	const handleHobbiiChange = (e) => setEmployee({
		...employee,
		hobbii: {
			...employee.hobbii,
			name: e.target.value
		}
	});

	return (
		<form>
			<label>
				First Name: 
				<input type="text" name="firstName" value={employee.firstName} onChange={handleFieldChange} />
			</label>
			<br/>
			<label>
				Last name:
				<input type="text" name="lastName" value={employee.lastName} onChange={handleFieldChange} />
			</label>
			<br/>
			<label>
				Skills:
				<input type="text" name="skills" value={employee.skills} onChange={handleFieldChange} />
			</label>
			<label>
				Hobbii: 
				<input type="text" value={employee.hobbii.name} onChange={handleHobbiiChange} />
			</label>
			<div>
				{employee.firstName} {employee.lastName} {employee.skills} {employee.hobbii.name}
			</div>
		</form>
	);
}