import React from "react";

const Child = ({ data, func }) => {
  func();
  return (
    <>
      <div style={{ display: "flex", margin: "0 auto", width: "100%" }}>
        <div style={{ backgroundColor: "teal" }}>
          <img
            src={data.img}
            alt=""
            style={{ objectFit: "contain", width: "500px", height: "500px" }}
          />
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          <p>Name:{data.name}</p>
          <p>Age:{data.age}</p>
        </div>
      </div>

      <div style={{ backgroundColor: "red" }}>Address: {data.address}</div>
    </>
  );
};

export default Child;
