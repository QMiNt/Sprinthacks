import "./App.css";
import React, { useEffect } from "react";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import LoginSignupHeader from "./components/UI/LoginSignupHeader";

import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Build from "./components/Algorithms/Build/Build";
import Discussion from "./components/Algorithms/Discuss/Discussion";
import Visualize from "./components/Algorithms/Visualize/Visualize";

import Explain from "./pages/Explain";

import Contests from "./pages/Contests";

import alanBtn from "@alan-ai/alan-sdk-web";

import Seive from "./components/Algorithms/Visualize/VizAlgorithms/primeComponents/seive";
import Queen from "./components/Algorithms/Visualize/VizAlgorithms/queenComponents/queen";
import BinarySearch from "./components/Algorithms/Visualize/VizAlgorithms/binarySearchComponent/binarySearch";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    alanBtn({
      key: "1cd1c991b78573fc8c9c034eaa1d05ef2e956eca572e1d8b807a3e2338fdd0dc/stage",
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />

          <Route path="/build" element={<Build />} />
          <Route path="/visualize" element={<Visualize />} />
          <Route path="/discuss" element={<Discussion />} />

          <Route path="/explain" element={<Explain />} />

          <Route path="/contests" element={<Contests />} />

          <Route path="/visualize/prime" element={<Seive />} />
          <Route path="/visualize/nqueen" element={<Queen />} />
          <Route path="/visualize/binarysearch" element={<BinarySearch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
