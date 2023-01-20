import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-text.png";
import profile from "../../images/pfp.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content clearfix">
        <div className="header-left">
          <div className="input-group icons">
            <div className="input-group-prepend">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "150px", marginRight: "20px" }}
                />
              </Link>
            </div>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <span
              className="input-group-text bg-transparent border-0 pr-2 pr-sm-3"
              id="basic-addon1"
            >
              <i className="mdi mdi-magnify"></i>
            </span>
            <div className="drop-down animated flipInX d-md-none">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="header-right">
          <ul className="clearfix">
            <li className="icons dropdown d-none d-md-flex">
              <Link to="/" className="log-user">
                <span>Home</span>
              </Link>
            </li>
            <li className="icons dropdown d-none d-md-flex">
              <Link to="/contests" className="log-user">
                <span>Contests</span>
              </Link>
            </li>
            <li className="icons dropdown d-none d-md-flex">
              <Link
                to="/algorithms"
                className="log-user"
                data-toggle="dropdown"
              >
                <span>Algorithms</span>
                <i className="fa fa-angle-down f-s-14" aria-hidden="true"></i>
              </Link>
              <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                <div className="dropdown-content-body">
                  <ul>
                    <li>
                      <Link to="/ai/interview">Build</Link>
                    </li>
                    <li>
                      <Link to="/ai/chat">Visualize</Link>
                    </li>
                    <li>
                      <Link to="/ai/image-gen">Discuss</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="icons dropdown d-none d-md-flex">
              <Link to="/ai" className="log-user" data-toggle="dropdown">
                <span>Artifical Intelligence</span>
                <i className="fa fa-angle-down f-s-14" aria-hidden="true"></i>
              </Link>
              <div className="drop-down dropdown-language animated fadeIn  dropdown-menu">
                <div className="dropdown-content-body">
                  <ul>
                    <li>
                      <Link to="/ai/interview">Interiew</Link>
                    </li>
                    <li>
                      <Link to="/ai/chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/ai/image-gen">Image Generator</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="icons dropdown">
              <div
                className="user-img c-pointer position-relative"
                data-toggle="dropdown"
              >
                <span className="activity active"></span>
                <Link to="/profile">
                  <img src={profile} height="40" width="40" alt="" />
                </Link>
              </div>
              <div className="drop-down dropdown-profile animated fadeIn dropdown-menu">
                <div className="dropdown-content-body">
                  <ul>
                    <li>
                      <Link to="/profile">
                        <i className="icon-user"></i> <span>Profile</span>
                      </Link>
                    </li>
                    <hr className="my-2" />
                    <li>
                      <Link to="/login">
                        <i className="icon-key"></i> <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
