import {Route, Routes} from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/About" element={<About />} />
    </Routes>
   
  );
}

export default App;
