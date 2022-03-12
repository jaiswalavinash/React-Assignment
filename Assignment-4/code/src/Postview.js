import React, { useEffect, useState } from "react";
import "./Postview.css";

const Postview = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getData = fetch("http://localhost:3004/user");
    getData
      .then((res) => res.json())
      .then((d) => {
        setPost(d);
      });
  });

  return (
    <div className="site-container">
      <header className="head">
        <img
          className="logo"
          style={{ width: "55px", height: "55px", borderRadius: "50%" }}
          src="https://cdn1.vectorstock.com/i/1000x1000/32/15/colorful-dashed-random-concentric-circles-abstract-vector-5543215.jpg"
          alt="logo"
        />
        <a className="name" href="#">
          Instaclone
        </a>
        <img
          className="camera"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          src="https://www.logodesign.ai/wp-content/uploads/edd/2020/10/Camera-Logo-Vector-Design.png"
          alt="cameraLogo"
        />
      </header>
      {post.map((post) => {
        return (
          <body className="main-container">
            <div className="post-container">
              <div className="post-info">
                <div className="name-info">
                  <label className="name">
                    <strong>{post.name}</strong>
                  </label>
                  <br></br>
                  <label className="profile-location">{post.location}</label>
                </div>
                <div>
                  <img
                    className="more-icon"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWB-8Su5wIXzWytwXTTJ5DYSKqrDHqLNNVblk-xFGdhWQhMtABFvcGMWfDhNpdRJRA5I&usqp=CAU"
                    alt="more"
                  />
                </div>
                <div className="image-display">
                  <img
                    className="profile-image"
                    src={post.PostImage}
                    alt="ima"
                  />
                </div>
                <div>
                  <img
                    className="image-like"
                    src="https://e7.pngegg.com/pngimages/507/757/png-clipart-computer-icons-heart-like-button-like-share-comment-love-logo.png"
                    alt="more"
                  />
                  <img
                    className="share"
                    src="https://toppng.com/uploads/preview/icon-icon-icon-icon-instagram-share-icon-11563216824o9wwpyqeut.png"
                    alt="more"
                  />
                  <label className="date">{post.date}</label>
                  <p className="like">{post.likes} likes</p>
                  <p className="description">{post.description}</p>
                </div>
              </div>
            </div>
          </body>
        );
      })}
    </div>
  );
};

export default Postview;
