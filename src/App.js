import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Events from "./pages/Events";
import ForgotPassword from "./pages/ForgotPassword";
import GetConnected from "./pages/GetConnected";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

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
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/readings" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/leadership" element={<Leadership />} />
          <Route exact path="/get-connected" element={<GetConnected />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
