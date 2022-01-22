import { Route, Routes } from "react-router-dom";
import CommingSoon from "./components/CommingSoon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyReadings from "./pages/DailyReadings";
import Events from "./pages/Events";
import ForgotPassword from "./pages/ForgotPassword";
import GetConnected from "./pages/GetConnected";
import Home from "./pages/Home";
import Leadership from "./pages/Leadership";
import Login from "./pages/Login";
import Mass from "./pages/Mass";
import Prayers from "./pages/Prayers";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Scc from "./pages/Scc";
import SccLeadership from "./pages/SccLeadership";

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
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/leadership" element={<Leadership />} />
          <Route exact path="/leadership/scc" element={<SccLeadership />} />
          <Route exact path="/daily-readings" element={<DailyReadings />} />
          <Route exact path="/mass" element={<Mass />} />
          <Route exact path="/prayers" element={<Prayers />} />
          <Route exact path="/scc" element={<Scc />} />
          <Route exact path="/bible" element={<CommingSoon />} />
          <Route exact path="/library" element={<CommingSoon />} />
          <Route exact path="/gallery" element={<CommingSoon />} />
          <Route exact path="/resources" element={<CommingSoon />} />
          <Route exact path="/get-connected" element={<GetConnected />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
