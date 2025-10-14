import React from "react";
import Title from "./Title";

function HomeBanner() {
  return (
    <div>
      {/* <Title className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-red-400 tracking-wide">
        Shop the Latest Collections
      </Title> */}
      <Title className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-red-400 tracking-wide animate-fadeIn">
        Shop the Latest Collections
      </Title>
    </div>
  );
}

export default HomeBanner;
