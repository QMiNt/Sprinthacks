import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignupHeader from "./components/UI/LoginSignupHeader"
import Discussion from "./components/Algorithms/Discuss/Discussion"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<><LoginSignupHeader/><Login /></>} />
          <Route path="/signup" element={<><LoginSignupHeader/><Signup /></>} />

          <Route path="/algorithms/discuss" element={<Discussion />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
