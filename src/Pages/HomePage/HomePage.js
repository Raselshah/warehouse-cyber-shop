import React from "react";
import Banner from "../Banner/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="highlight-products grid grid-cols-3 w-4/5 mx-auto">
        <div className="electronic-products">
          <h2>gg</h2>
        </div>
        <div className="computer-products">
          <h2>gah</h2>
        </div>
        <div className="audio-products">
          <h2>dsfg</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
