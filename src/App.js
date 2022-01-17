import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import GetConnected from "./pages/GetConnected";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="min-h-[75vh]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/readings" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/get-connected" element={<GetConnected />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
