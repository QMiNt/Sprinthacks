import React from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  return (
    <div>
      <button
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="tf-ion-ios-arrow-up"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;
