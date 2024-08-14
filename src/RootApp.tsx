import { StrictMode } from "react";

export default function RootApp(): React.ReactElement {
	return (
		<StrictMode>
			<h1 className="text-3xl font-bold underline text-blue-800">Hello world!</h1>
		</StrictMode>
	);
}
