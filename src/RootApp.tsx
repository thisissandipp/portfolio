import { StrictMode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

export default function RootApp(): React.ReactElement {
	return (
		<StrictMode>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
					<AppRouter />
				</Suspense>
			</BrowserRouter>
		</StrictMode>
	);
}
