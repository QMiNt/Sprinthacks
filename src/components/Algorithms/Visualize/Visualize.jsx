import React from "react";

const Algorithms = () => {
  return (
    <div className="row">
      <div className="col-12 m-b-30">
        <h4 className="d-inline">Cards With Header, Footer and Links</h4>
        <p className="text-muted">This is 3 column contents</p>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <div className="card-header bg-white">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              </div>
              <img className="img-fluid" src="images/big/img1.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text and below as a
                  natural lead-in to the additional content. This content is a
                  little bit longer.
                </p>
              </div>
              <div className="card-footer">
                <p className="card-text d-inline">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <a href="#" className="card-link float-right">
                  <small>Card link</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
