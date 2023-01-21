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
import Build from "./pages/Build";
import Discussion from "./pages/Discussion";
import Visualize from "./pages/Visualize";

import Explain from "./pages/Explain";

import Contests from "./pages/Contests";

import alanBtn from "@alan-ai/alan-sdk-web";

import Seive from "./components/Visualize/VizAlgorithms/primeComponents/seive";
import Queen from "./components/Visualize/VizAlgorithms/queenComponents/queen";
import BinarySearch from "./components/Visualize/VizAlgorithms/binarySearchComponent/binarySearch";
import Pathfinder from "./components/Visualize/VizAlgorithms/pathfinderComponents/pathfinder";
import Sort from "./components/Visualize/VizAlgorithms/sortComponents/sort";
import ConvexHull from "./components/Visualize/VizAlgorithms/convexHullComponents/convexHull";
import RecursiveSort from "./components/Visualize/VizAlgorithms/recursiveSortComponents/recursiveSort";
import TuringMachine from "./components/Visualize/VizAlgorithms/Turing Machine/turingMachine";
import Puzzle from "./components/Visualize/VizAlgorithms/15puzzleComponents/puzzle";
import Graph from "./components/Visualize/VizAlgorithms/Graph/graph";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommentGet from "./components/Discuss/CommentGet";
import CommentPost from "./components/Discuss/CommentPost";
import Analyze from "./pages/Analyze";

function App() {
  useEffect(() => {
    alanBtn({
      key: "3b12133609113b0c558d934a3769129c2e956eca572e1d8b807a3e2338fdd0dc/stage",
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
          <Route path="/visualize/puzzle" element={<Puzzle />} />
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

          <Route path="/analyze" element={<Analyze />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
