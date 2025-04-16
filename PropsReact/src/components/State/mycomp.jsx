import React, { useState } from "react";

const Comp = () => {
  const [state, setState] = useState(true);

  const handleclick = () => {
    setState(!state);
  };

  return (
    <div>
      {state ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nobis
          delectus ut maxime ab possimus nostrum quidem, veritatis consequuntur
          pariatur inventore unde, exercitationem omnis non maiores perspiciatis
          voluptatum expedita numquam?
        </p>
      ) : (
        <p></p>
      )}

      <button onClick={handleclick}>Click</button>
    </div>
  );
};

export default Comp;
