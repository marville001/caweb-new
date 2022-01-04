import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GetConnected from "./pages/GetConnected";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readings" element={<Home />} />
          <Route path="/get-connected" element={<GetConnected />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
