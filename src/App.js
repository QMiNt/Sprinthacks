import "./App.css";
import React, { useEffect } from "react";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import LoginSignupHeader from "./components/UI/LoginSignupHeader"

import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";

import Algorithms from "./pages/Algorithms";
import Build from "./components/Algorithms/Build/Build";
import Discussion from "./components/Algorithms/Discuss/Discussion";
import Visualize from "./components/Algorithms/Visualize/Visualize";

import AI from "./pages/AI";
import Interview from "./components/AI/Interview";
import Chat from "./components/AI/Chat";
import ImageGen from "./components/AI/ImageGen";

import Contests from "./pages/Contests";

import alanBtn from "@alan-ai/alan-sdk-web";

import Pathfinder from "./components/Algorithms/Visualize/VizAlgorithms/pathfinderComponents/pathfinder";
import Seive from "./components/Algorithms/Visualize/VizAlgorithms/primeComponents/seive";
import Sort from "./components/Algorithms/Visualize/VizAlgorithms/sortComponents/sort";
import Queen from "./components/Algorithms/Visualize/VizAlgorithms/queenComponents/queen";
import ConvexHull from "./components/Algorithms/Visualize/VizAlgorithms/convexHullComponents/convexHull";
import BinarySearch from "./components/Algorithms/Visualize/VizAlgorithms/binarySearchComponent/binarySearch";
import RecursiveSort from "./components/Algorithms/Visualize/VizAlgorithms/recursiveSortComponents/recursiveSort";
import Puzzle from "./components/Algorithms/Visualize/VizAlgorithms/15puzzleComponents/puzzle";
import TuringMachine from "./components/Algorithms/Visualize/VizAlgorithms/Turing Machine/turingMachine";
import Graph from "./components/Algorithms/Visualize/VizAlgorithms/Graph/graph";

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
          <Route path="/login" element={<><LoginSignupHeader/><Login /></>} />
          <Route path="/signup" element={<><LoginSignupHeader/><Signup /></>} />

          <Route path="/algorithms/discuss" element={<Discussion />} />
          
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoMatch />} />

          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/algorithms/build" element={<Build />} />
          <Route path="/algorithms/visualize" element={<Visualize />} />
          <Route path="/algorithms/discuss" element={<Discussion />} />

          <Route path="/ai" element={<AI />} />
          <Route path="/ai/interview" element={<Interview />} />
          <Route path="/ai/chat" element={<Chat />} />
          <Route path="/ai/image-gen" element={<ImageGen />} />

          <Route path="/contests" element={<Contests />} />

          <Route
            path="/algorithms/visualize/pathfinder"
            element={<Pathfinder />}
          />
          <Route path="/algorithms/visualize/prime" element={<Seive />} />
          <Route path="/algorithms/visualize/sort" element={<Sort />} />
          <Route path="/algorithms/visualize/nqueen" element={<Queen />} />
          <Route
            path="/algorithms/visualize/convexhull"
            element={<ConvexHull />}
          />
          <Route
            path="/algorithms/visualize/binarysearch"
            element={<BinarySearch />}
          />
          <Route
            path="/algorithms/visualize/recursivesort"
            element={<RecursiveSort />}
          />
          <Route
            path="/algorithms/visualize/turing"
            element={<TuringMachine />}
          />
          <Route path="/algorithms/visualize/15puzzle" element={<Puzzle />} />
          <Route path="/algorithms/visualize/graph" element={<Graph />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
