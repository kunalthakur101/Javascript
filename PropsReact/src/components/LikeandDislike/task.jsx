import React, { useState } from "react";

import logo from "../../assets/react.svg";

const Task = () => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handlelike = () => {
    setLike(like + 1);
  };
  const handledislike = () => {
    setDislike(dislike + 1);
  };

  const handlereset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <img src={logo}></img>
      <div>
        <button onClick={handlelike}>Like</button>
        {like}
        <button onClick={handledislike}>Dislike</button>
        {dislike}

        <button onClick={handlereset}>Reset</button>
      </div>
    </div>
  );
};

export default Task;
