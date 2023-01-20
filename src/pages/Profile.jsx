import React from "react";
import profile from "../images/pfp.png";

const Profile = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="media align-items-center mb-4">
                  <img
                    className="mr-3"
                    src={profile}
                    width="80"
                    height="80"
                    alt="profile-img"
                  />
                  <div className="media-body">
                    <h3 className="mb-0">Jay</h3>
                    <p className="text-muted mb-0">Jain</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <div className="card card-profile text-center">
                      <span className="mb-1 text-primary">
                        <i className=""></i>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-profile text-center">
                      <span className="mb-1 text-warning">
                        <i className=""></i>
                      </span>
                    </div>
                  </div>
                </div>
                <h4>About Me</h4>
                <p className="text-muted">Hi, I'm Jay, I'm a dev</p>
                <h4>Interests</h4>
                <p className="text-muted">React, Django</p>
                <h4>Education</h4>
                <p className="text-muted">B.Tech</p>
                <ul className="card-profile__info">
                  <li className="mb-1">
                    <strong className="text-dark mr-4">Designation</strong>
                    <span>Frontend Developer</span>
                  </li>
                  <li>
                    <strong className="text-dark mr-4">Email</strong>
                    <span>jay4emails@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
