import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import { IsSignedInContext, UserInfoContext } from "./Contexts/Context";



function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });


  return (
    <IsSignedInContext.Provider value={[isSignedIn, setIsSignedIn]}>
      <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/:id" element={<PrivateRoute Component={Register} />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </UserInfoContext.Provider>
    </IsSignedInContext.Provider>
  );
}

export default App;
