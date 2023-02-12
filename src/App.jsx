import { Route, Routes } from "react-router-dom";
import Layout from "./Components/HOCs/Layout";
import { Search } from "./Components/Search";
import Rocket from "./features/rockets/Rocket";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/rockets"
          element={
            <Layout>
              <Rocket />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
