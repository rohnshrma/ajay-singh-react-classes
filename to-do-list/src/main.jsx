import { createRoot } from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./Context/TaskContext";
createRoot(document.getElementById("root")).render(
<TaskProvider>
<App />
</TaskProvider>
);
