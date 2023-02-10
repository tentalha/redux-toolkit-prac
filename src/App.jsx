import { Route, Routes } from "react-router-dom";
import Navabr from "./Components/Navabr";
import Rocket from "./features/rockets/Rocket";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rockets" element={<Rocket />} />
      </Routes>
    </div>
  );
};

export default App;
