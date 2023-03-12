import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AdminLoginContext, IsSignedInContext, RegistrationData, UserInfoContext } from "./Contexts/Context";
import { lazy, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import PrivateRouteAdmin from "./components/PrivateRoute/PrivateRouteAdmin/PrivateRouteAdmin";
// import AdminDashboard from "./components/AdminPage/AdminDashboard/AdminDashboard";

const UserDashboard = lazy(() => import("./components/UserDashboard/UserDashboard"));
const Register = lazy(() => import("./components/Register/Register"));
const Login = lazy(() => import("./components/Login/Login"));
const NoMatch = lazy(() => import("./components/NoMatch/NoMatch"));
const AdminLogin = lazy(() => import("./components/AdminPage/AdminLogin/AdminLogin"));
const AdminDashboard = lazy(()=> import("./components/AdminPage/AdminDashboard/AdminDashboard"));


function App() {
  
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });
  const [registrationData, setRegistrationData] = useState({
    userName: '',
    userEmail: '',
    date: '',
    description: '',
    taskName: ''
  });
  const [isAdmin, setIsAdmin] = useState(false);


  return (
    <IsSignedInContext.Provider value={[isSignedIn, setIsSignedIn]}>
      <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
        <RegistrationData.Provider value={[registrationData, setRegistrationData]}>
          <AdminLoginContext.Provider value={[isAdmin, setIsAdmin]}>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register/:id" element={<PrivateRoute Component={Register} />}
              />

              <Route path="/login" element={
                <Suspense fallback={<LoadingScreen />}>
                  <Login />
                </Suspense>
              } />

              <Route path="/dashboard" element={
                <Suspense fallback={<LoadingScreen />}>
                  <UserDashboard />
                </Suspense>
              } />

              <Route path="/adminLogin" element={
                <Suspense fallback={<LoadingScreen />}>
                  <AdminLogin />
                </Suspense>
              } />

              <Route path="/admin/dashboard" element={
                <PrivateRouteAdmin Component={AdminDashboard} />
              } />

              <Route path="*" element={<NoMatch />} />
            </Routes>

          </AdminLoginContext.Provider>
        </RegistrationData.Provider>
      </UserInfoContext.Provider>
    </IsSignedInContext.Provider>
  );
}

export default App;
