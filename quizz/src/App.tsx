import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Quizzes } from "./pages/Quizzes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default App;
