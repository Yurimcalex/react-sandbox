export default function FancyBorder(props) {
	return (
		<div 
			style={{
				border: '1px dashed gray'
			}}
		>
			{props.children}
		</div>
	);
}