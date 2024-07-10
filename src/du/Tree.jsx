export default function Tree() {
	return (
		<GrandParent>
			<Text text={"Text from grand parent"}/>
			<FancyBorder>
				<Parent>
					<Text text={"Text from Parent"}/>
					<FancyBorder>
						<Child />
					</FancyBorder>
				</Parent>
			</FancyBorder>
		</GrandParent>
	);
}


function GrandParent({ children }) {
	return (
		<div>
			<h2>Ama Grand Parent</h2>
			{children}
		</div>
	);
}

function Parent({ children }) {
	return (
		<div>
			<h3>Ama Parent</h3>
			{children}
		</div>
	);
}

function Child() {
	return (
		<div>
			<h4>Ama child</h4>
		</div>
	);
}

function FancyBorder({ children }) {
	return (
		<div>
			<h5>Ama Fancy Border</h5>
			{children}
		</div>
	);
}

function Text({ text }) {
	return (
		<div style={{border: '1px solid gray'}}>
			<h5>Ama some text</h5>
			<p>{text}</p>
		</div>
	);
}