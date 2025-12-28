import React from "react";
import { ReactTyped } from "react-typed"; 

const Typing = () => {
  return (
    <div>
      <div className="font-lg text-lg text-teal-500">
        <ReactTyped
          strings={[
            "Data Scientist",
            "Machine Learning Engineer",
          ]}
          typeSpeed={70}
          backSpeed={30}
          loop
        />
      </div>
    </div>
  );
};

export default Typing;



