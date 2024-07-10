export default function LogButton({ text }) {
	return <button onClick={() => console.log(text)}>Log text</button>;
}