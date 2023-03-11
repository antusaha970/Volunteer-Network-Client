import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";



function App() {

  
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/:id" element={<PrivateRoute Component={Register} />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
