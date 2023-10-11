import "./App.css";
import CardsGrid from "./components/CardsGrid";
import Header from "./components/NavBar/Header";
import RocketDetailPage from "./components/RocketDetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <CardsGrid />
      {/* <RocketDetailPage /> */}
    </div>
  );
}

export default App;
