export default function NotesList(props) {
	return (
		<div>
			<List {...props} />
		</div>
	);
}


function List({ notes, isList = true }) {
	return (
		<div>
			{isList
				? <ul>
						{notes.map(note => <li key={note}>{note}</li>)}
					</ul>
				: <span>{notes.join(', ')}</span>}
		</div>
	); 
}