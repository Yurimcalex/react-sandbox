import { useState } from 'react';

export default function EmployeeForm() {
	const [employee, setEmployee]	= useState({
		firstName: 'Sarah',
		lastName: 'Blinkovich',
		skills: 'I can sing!'
	});

	const handleFirstNameChange = (e) => setEmployee({ ...employee, firstName: e.target.value });
	const handleLastNameChange = (e) => setEmployee({ ...employee, lastName: e.target.value });
	const handleSkillsChange = (e) => setEmployee({ ...employee, skills: e.target.value });

	return (
		<form>
			<label>
				First Name: 
				<input type="text" value={employee.firstName} onChange={handleFirstNameChange} />
			</label>
			<br/>
			<label>
				Last name:
				<input type="text" value={employee.lastName} onChange={handleLastNameChange} />
			</label>
			<br/>
			<label>
				Skills
				<input type="text" value={employee.skills} onChange={handleSkillsChange} />
			</label>
			<div>
				{employee.firstName} {employee.lastName} {employee.skills}
			</div>
		</form>
	);
}