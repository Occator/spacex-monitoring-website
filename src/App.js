import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/Header";
import LandingPage from "./components/LandingPage";
import { menuItems } from "./components/NavBar/menu-items";
import RocketDetailPage from "./components/RocketDetailPage";
import FilteredLaunches from "./components/FilteredLaunches";

function App() {
  console.log("### composedURLs ###", menuItems);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rockets/:id" element={<RocketDetailPage />} />
        <Route path="/launches/:status" element={<FilteredLaunches />} />
      </Routes>
    </div>
  );
}

export default App;
