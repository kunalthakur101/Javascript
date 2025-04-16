import React from "react";
import Child from "./child";

const Parent = () => {
  let data = {
    name: "kunal",
    age: 24,
    address: "Mumbai",
    img: "https://images.unsplash.com/photo-1741866987680-5e3d7f052b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  const fun = () => {
    console.log("function called");
  };

  return (
    <div>
      <h1>parent</h1>
      <Child data={data} func={fun} />
    </div>
  );
};

export default Parent;
