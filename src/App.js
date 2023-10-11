import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/NavBar/Header";
import LandingPage from "./components/LandingPage";
import RocketDetailPage from "./components/RocketDetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<RocketDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
