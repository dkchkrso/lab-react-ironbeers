import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ListBeersPage from "./pages/ListBeersPage";
import NewBeerPage from "./pages/NewBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header" style={{ color: "#000" }}>
        {/* {true ? ( //If not path = "/"
          <Link to="/">
            <Card.Img src={Home} />
          </Link>
        ) : (
          ""
        )} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ListBeers" element={<ListBeersPage />} />
          <Route path="/NewBeer" element={<NewBeerPage />} />
          <Route path="/RandomBeer" element={<RandomBeerPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
