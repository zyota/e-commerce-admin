import React from "react";
import "../style/Home.css";
import { data } from "../util/data";
export default function Home() {
  return (
    <div className="home">
      <div className="top">
        <b>
          <h3>Popular products</h3>
        </b>
        <div className="button">
          <button>Cameras</button>
          <button>Laptops</button>
          <button>Tablets</button>
          <button>Mouse</button>
          <button>Sale</button>
        </div>
      </div>
      <div className="mid">{data}</div>
    </div>
  );
}
