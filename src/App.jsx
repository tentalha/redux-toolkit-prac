import { Route, Routes } from "react-router-dom";
import Navabr from "./Components/Navabr";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
