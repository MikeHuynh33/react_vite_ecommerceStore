import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
