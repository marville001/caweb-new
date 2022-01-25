import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AdminAccount,
  AdminHome,
  AdminLogin,
  EventsPage,
  LeadershipPage,
  PrayersPage,
  UsersPage,
} from "./admin/pages";
import Loading from "./components/Loading";

import { getProfileFetch } from "./redux/actions";
import { useDispatch } from "react-redux";

const CommingSoon = React.lazy(() => import("./components/CommingSoon"));
const Footer = React.lazy(() => import("./components/Footer"));
const Header = React.lazy(() => import("./components/Header"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const DailyReadings = React.lazy(() => import("./pages/DailyReadings"));
const Events = React.lazy(() => import("./pages/Events"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const GetConnected = React.lazy(() => import("./pages/GetConnected"));
const Home = React.lazy(() => import("./pages/Home"));
const Leadership = React.lazy(() => import("./pages/Leadership"));
const Login = React.lazy(() => import("./pages/Login"));
const Mass = React.lazy(() => import("./pages/Mass"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Prayers = React.lazy(() => import("./pages/Prayers"));
const Register = React.lazy(() => import("./pages/Register"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const Scc = React.lazy(() => import("./pages/Scc"));
const SccLeadership = React.lazy(() => import("./pages/SccLeadership"));
const AdminDashboard = React.lazy(() => import("./admin/AdminDashboard"));

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileFetch());
  }, [dispatch]);

  return (
    <div className="overflow-x-hidden">
      {/* <Header /> */}
      {/* <div className="min-h-[75vh]"> */}
      <React.Suspense fallback={<Loading />}>
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
            <Route index element={<AdminHome />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="my-account" element={<AdminAccount />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="prayers" element={<PrayersPage />} />
            <Route path="leaders" element={<LeadershipPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="*" element={<NotFound />} />
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
      </React.Suspense>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
