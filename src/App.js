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
    GalleryPage,
} from "./admin/pages";
import Loading from "./components/Loading";

import { getProfileFetch } from "./redux/actions";
import { useDispatch } from "react-redux";
import MyAccount from "./pages/MyAccount";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SccsPage from "./admin/pages/SccsPage";
import SccPage from "./admin/pages/SccPage";
import LeadershipWelcomePage from "./admin/pages/LeadershipWelcomePage";

const CommingSoon = React.lazy(() => import("./components/CommingSoon"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const DailyReadings = React.lazy(() => import("./pages/DailyReadings"));
const Events = React.lazy(() => import("./pages/Events"));
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const GetConnected = React.lazy(() => import("./pages/GetConnected"));
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Mass = React.lazy(() => import("./pages/Mass"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Prayers = React.lazy(() => import("./pages/Prayers"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Register = React.lazy(() => import("./pages/Register"));
const ResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const Scc = React.lazy(() => import("./pages/Scc"));
const MainLeadership = React.lazy(() => import("./pages/leadership/MainLeadership"));
const Leadership = React.lazy(() => import("./pages/leadership"));
const SccLeadership = React.lazy(() => import("./pages/leadership/SccLeadership"));
const SccLeadershipWelcome = React.lazy(() => import("./pages/leadership/SccLeadershipWelcome"));
const AdminDashboard = React.lazy(() => import("./admin/AdminDashboard"));

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-[75vh]relative">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProfileFetch());
    }, [dispatch]);

    return (
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
                <Route path="leadership" element={<Leadership /> } >
                    <Route exact path="" element={<MainLayout><MainLeadership /> </MainLayout>} />
                    <Route exact path="scc" element={<MainLayout><SccLeadershipWelcome /></MainLayout>} />
                    <Route exact path="scc/:scc" element={<MainLayout><SccLeadership /></MainLayout>} />
                    <Route path="*" element={<NotFound />} />
                </Route>

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
                            <Gallery />
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
                <Route
                    exact
                    path="/my-account"
                    element={
                        <MainLayout>
                            <MyAccount />
                        </MainLayout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <NotFound />
                        </MainLayout>
                    }
                />
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route
                        index
                        element={
                            <AdminPrivateRoute>
                                <AdminHome />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route path="login" element={<AdminLogin />} />
                    <Route
                        path="home"
                        element={
                            <AdminPrivateRoute>
                                <AdminHome />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route
                        path="my-account"
                        element={
                            <AdminPrivateRoute>
                                <AdminAccount />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route
                        path="users"
                        element={
                            <AdminPrivateRoute>
                                <UsersPage />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route
                        path="prayers"
                        element={
                            <AdminPrivateRoute>
                                <PrayersPage />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route path="sccs"  element={ <AdminPrivateRoute> <SccsPage /> </AdminPrivateRoute> }/>
                    <Route path="sccs/:key"  element={ <AdminPrivateRoute> <SccPage /> </AdminPrivateRoute> }/>
                    <Route path="leaders"  element={ <AdminPrivateRoute> <LeadershipWelcomePage /> </AdminPrivateRoute> }/>
                    <Route path="leaders/:group"  element={ <AdminPrivateRoute> <LeadershipPage /> </AdminPrivateRoute> }/>
                    <Route
                        path="events"
                        element={
                            <AdminPrivateRoute>
                                <EventsPage />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route
                        path="gallery"
                        element={
                            <AdminPrivateRoute>
                                <GalleryPage />
                            </AdminPrivateRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <div className="m-16 p-4 flex flex-col items-center justify-center">
                                <h1 className="text-7xl text-dodge-blue font-bold">
                                    404
                                </h1>
                                <p className="text-xl font-light mt-4">
                                    Page not found.. either deleted or not
                                    yet done.
                                </p>
                            </div>
                        }
                    />
                </Route>
            </Routes>
        </React.Suspense> 
    );
}

export default App;
