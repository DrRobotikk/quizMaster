import "./App.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Quizes from "./pages/quizes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quizes" element={<Quizes />} />
      </Routes>
    </div>
  );
}

export default App;
