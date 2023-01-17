import React from "react";
import "../style/Header.css";
export default function Header() {
  return (
    <header className="d-flex">
      <div className="header-top">
        <div className="image">
          <img src={"Group_5.png"} alt="png" />
        </div>
        <div className="input-btn">
          <input type="text" placeholder="Search any things" />
          <button>Search</button>
        </div>
        <div className="bag">
          <img src={"Group 3.png"} alt="" />
          <img src={"Frame 7.svg"} alt="" />
        </div>
      </div>

      <div className="header-bottom">
        <div>
          <h1>CANON</h1>
          <p>camera</p>
          <div className="shop-view">
            <button className="shop">Shop now</button>
            <button className="view">View more</button>
          </div>
        </div>
        <img src={"Group 8.png"} alt="" />
      </div>
    </header>
  );
}
