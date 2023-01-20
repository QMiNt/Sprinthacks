import React, { useState, useEffect } from "react";
import profile from "../images/pfp.png";

const Profile = () => {
  const [card, setCard] = useState([]);
  let token = sessionStorage.getItem("token");
  useEffect(() => {
    (async () => {
      let profile_info;
      try {
        let response = await fetch(
          "https://hacknova2.pythonanywhere.com/login/profilecreate/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        profile_info = await response.json();
        console.log(profile_info);
      } catch (error) {
        console.log("Error" + error);
        profile_info = [];
      }
      setCard(profile_info);
    })();
  }, []);
  console.log(card);

  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="card">
                {card.map((post, index) => {
                  return (
                    <div className="card-body">
                      <div className="media align-items-center mb-4">
                        <img
                          className="mr-3"
                          src={post.profile_pic}
                          width="80"
                          height="80"
                          alt="profile-img"
                        />
                        <div className="media-body">
                          <h3 className="mb-0">{post.name}</h3>
                          {/* <p className="text-muted mb-0">Jain</p> */}
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
                      <p className="text-muted">{post.about}</p>
                      <h4>Interests</h4>
                      <p className="text-muted">{post.interests}</p>
                      <h4>Education</h4>
                      <p className="text-muted">{post.education}</p>
                      <ul className="card-profile__info">
                        <li className="mb-1">
                          <strong className="text-dark mr-4">
                            Designation
                          </strong>
                          <span>{post.designation}</span>
                        </li>
                        <li>
                          <strong className="text-dark mr-4">Email</strong>
                          <span>{post.email}</span>
                        </li>
                      </ul>
                    </div>
                  );
                })}
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
    </>
  );
};

export default Profile;
