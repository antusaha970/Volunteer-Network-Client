import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";



function App() {

  
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
