import React from "react";
import "./menu-item.style.scss";

//withRouter
import withRouter from '../../utils/function.until';

const MenuItem = ({ title, imageUrl, size, router, linkUrl}) => ( // v6
  <div className={`${size} menu-item`} onClick={() => router.navigate(`${linkUrl}`)}>
    <div className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem); // withRouter is not working on eact-router-dom 6
