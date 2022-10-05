import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EventDetails from "./components/EventDetails/EventDetails";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/create" element={<CreateEvent />} />
					<Route path="/event" element={<EventDetails />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
