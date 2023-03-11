import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Register from "./components/Register/Register";



function App() {

  
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/:id" element={<Register />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
