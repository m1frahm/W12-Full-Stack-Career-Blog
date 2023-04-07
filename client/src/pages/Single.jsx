import React from "react";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://cdn.shopify.com/s/files/1/1186/0402/files/D-homepage-intelligent-change-productivity.jpg?v=1676582601&width=1280"
          alt="content-img"/>

        <div className="user">
          <img src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg" alt="user-icon"/>
          <div className="info">
          <span>Alex Ikonn</span>
          <p>Posted 1 day ago</p>
           </div>
        </div>
      </div>
      <div className="menu">menu</div>
    </div>
  );
};

export default Single;
