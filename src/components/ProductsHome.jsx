import React from "react";

export default function ProductsHome(prop) {
  const { detail } = prop;
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={detail.image} alt="png" />
          <h3>{detail.name}</h3>
          <h4>{detail.price}</h4>
          <p>
            <span>Stock: </span>
            {detail.stock}
          </p>
        </div>
      </div>
    </div>
  );
}
