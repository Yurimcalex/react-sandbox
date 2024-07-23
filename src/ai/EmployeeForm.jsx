import { useState } from 'react';

export default function EmployeeForm() {
	const [employee, setEmployee]	= useState({
		firstName: 'Sarah',
		lastName: 'Blinkovich',
		skills: 'I can sing!'
	});

	const handleFieldChange = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value });

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
				Skills
				<input type="text" name="skills" value={employee.skills} onChange={handleFieldChange} />
			</label>
			<div>
				{employee.firstName} {employee.lastName} {employee.skills}
			</div>
		</form>
	);
}