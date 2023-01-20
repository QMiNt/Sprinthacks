import React from "react";

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
                    src="images/avatar/11.png"
                    width="80"
                    height="80"
                    alt="profile-img"
                  />
                  <div className="media-body">
                    <h3 className="mb-0">First</h3>
                    <p className="text-muted mb-0">Last</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <div className="card card-profile text-center">
                      <span className="mb-1 text-primary">
                        <i className="icon-people"></i>
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-profile text-center">
                      <span className="mb-1 text-warning">
                        <i className="icon-user-follow"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <h4>About Me</h4>
                <p className="text-muted">
                  Hi, I'm Pikamy, has been the industry standard dummy text ever
                  since the 1500s.
                </p>
                <h4>Interests</h4>
                <p className="text-muted">React, Django</p>
                <h4>Education</h4>
                <p className="text-muted">React, Django</p>
                <ul className="card-profile__info">
                  <li className="mb-1">
                    <strong className="text-dark mr-4">Designation</strong>
                    <span>01793931609</span>
                  </li>
                  <li>
                    <strong className="text-dark mr-4">Email</strong>
                    <span>name@domain.com</span>
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
