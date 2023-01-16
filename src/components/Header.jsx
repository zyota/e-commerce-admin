import React from "react";
import "../style/Header.css";
export default function Header() {
  return (
    <header className="d-flex">
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
    </header>
  );
}
