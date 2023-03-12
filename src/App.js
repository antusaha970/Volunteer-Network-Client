import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { IsSignedInContext, RegistrationData, UserInfoContext } from "./Contexts/Context";
import { lazy, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const UserDashboard = lazy(() => import("./components/UserDashboard/UserDashboard"));
const Register = lazy(() => import("./components/Register/Register"));
const Login = lazy(() => import("./components/Login/Login"));
const NoMatch = lazy(() => import("./components/NoMatch/NoMatch"));


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


  return (
    <IsSignedInContext.Provider value={[isSignedIn, setIsSignedIn]}>
      <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
        <RegistrationData.Provider value={[registrationData, setRegistrationData]}>

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
            <Route path="*" element={<NoMatch />} />
          </Routes>


        </RegistrationData.Provider>
      </UserInfoContext.Provider>
    </IsSignedInContext.Provider>
  );
}

export default App;
