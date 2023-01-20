import React from "react";
import Card from "../../UI/Card";

const Algorithms = () => {
  return (
    <div className="row">
      <div className="col-12 m-b-30">
        <h4 className="d-inline">Cards With Header, Footer and Links</h4>
        <p className="text-muted">This is 3 column contents</p>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <Card title="title" subtitle="subtitle" link="/algorithms/visualize/prime
            " img="" desc="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
