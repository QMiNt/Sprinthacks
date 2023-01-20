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
import Pathfinder from "./components/Algorithms/Visualize/VizAlgorithms/pathfinderComponents/pathfinder";
import Sort from "./components/Algorithms/Visualize/VizAlgorithms/sortComponents/sort";
import ConvexHull from "./components/Algorithms/Visualize/VizAlgorithms/convexHullComponents/convexHull";
import RecursiveSort from "./components/Algorithms/Visualize/VizAlgorithms/recursiveSortComponents/recursiveSort";
import TuringMachine from "./components/Algorithms/Visualize/VizAlgorithms/Turing Machine/turingMachine";
import Puzzle from "./components/Algorithms/Visualize/VizAlgorithms/15puzzleComponents/puzzle";
import Graph from "./components/Algorithms/Visualize/VizAlgorithms/Graph/graph";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentGet from "./components/Algorithms/Discuss/CommentGet";
import CommentPost from "./components/Algorithms/Discuss/CommentPost";
import Csv from "./pages/Csv";

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

          <Route path="/visualize/prime" element={<Seive />} />
          <Route path="/visualize/nqueens" element={<Queen />} />
          <Route path="/visualize/pathfinder" element={<Pathfinder />} />
          <Route path="/visualize/sort" element={<Sort />} />
          <Route path="/visualize/convexhull" element={<ConvexHull />} />
          <Route path="/visualize/binarysearch" element={<BinarySearch />} />
          <Route path="/visualize/recursivesort" element={<RecursiveSort />} />
          <Route path="/visualize/turing" element={<TuringMachine />} />
          <Route path="/visualize/15puzzle" element={<Puzzle />} />
          <Route path="/visualize/graph" element={<Graph />} />

          <Route path="/discuss" element={<Discussion />} />
          <Route
            path="/comments/:id"
            element={
              <>
                <CommentPost />
                <CommentGet />
              </>
            }
          />

          <Route path="/explain" element={<Explain />} />

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
          <Route path="/comments/:id" element={<><CommentPost/><CommentGet /></>} />
          <Route path="/csv" element={<><Csv /></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
