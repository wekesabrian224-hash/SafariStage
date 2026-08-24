import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import RoutesPage from "./pages/Routes";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/routes" element={<RoutesPage />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
