import * as ReactDOM from "react-dom/client";
import RootApp from "./RootApp";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(<RootApp />);
