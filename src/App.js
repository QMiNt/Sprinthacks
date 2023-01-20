import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginSignupHeader from "./components/UI/LoginSignupHeader"

function App() {
  return (
    <div className="App">
      {/* <h1>njdncdj</h1> */}
      <Router>
        <Routes>
          <Route path="/login" element={<><LoginSignupHeader/><Login /></>} />
          <Route path="/signup" element={<><LoginSignupHeader/><Signup /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
