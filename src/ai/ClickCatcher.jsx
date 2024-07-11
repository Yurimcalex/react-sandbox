export default function ClickCatcher({ children }) {
	return <div onClickCapture={(e) => console.log(e.target.nodeName)}>{children}</div>;
}