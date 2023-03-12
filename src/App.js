import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { IsSignedInContext, RegistrationData, UserInfoContext } from "./Contexts/Context";



function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });
  const [registrationData, setRegistrationData] = useState({
      userName: '',
      userEmail:'',
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
          <Route path="/register/:id" element={<PrivateRoute Component={Register} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

        
        </RegistrationData.Provider>
      </UserInfoContext.Provider>
    </IsSignedInContext.Provider>
  );
}

export default App;
