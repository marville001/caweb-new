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
import NotFound from "./pages/NotFound";
import Prayers from "./pages/Prayers";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Scc from "./pages/Scc";
import SccLeadership from "./pages/SccLeadership";
import AdminDashboard from "./admin/AdminDashboard";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-[75vh]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <Header /> */}
      {/* <div className="min-h-[75vh]"> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/forgot-password"
          element={
            <MainLayout>
              <ForgotPassword />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/reset-password"
          element={
            <MainLayout>
              <ResetPassword />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/readings"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/contact-us"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/leadership"
          element={
            <MainLayout>
              <Leadership />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/leadership/scc"
          element={
            <MainLayout>
              <SccLeadership />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/daily-readings"
          element={
            <MainLayout>
              <DailyReadings />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/mass"
          element={
            <MainLayout>
              <Mass />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/prayers"
          element={
            <MainLayout>
              <Prayers />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/scc"
          element={
            <MainLayout>
              <Scc />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/bible"
          element={
            <MainLayout>
              <CommingSoon />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/library"
          element={
            <MainLayout>
              <CommingSoon />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/gallery"
          element={
            <MainLayout>
              <CommingSoon />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/resources"
          element={
            <MainLayout>
              <CommingSoon />
            </MainLayout>
          }
        />
        <Route
          exact
          path="/get-connected"
          element={
            <MainLayout>
              <GetConnected />
            </MainLayout>
          }
        />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<div>home</div>} />
          <Route path="home" element={<div>home</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
