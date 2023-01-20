import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <Link to={props.link}>
        <div className="card-header bg-white">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        </div>
        <img className="img-fluid" src={props.img} alt="" />
        <div className="card-body">
          <p className="card-text">{props.desc}</p>
        </div>
        <div className="card-footer">
          <Link to={props.link} className="card-link float-right">
            <small>Card link</small>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default Card;
