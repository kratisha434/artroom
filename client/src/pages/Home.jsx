 import React from "react";
import collageImage from "../assets/homepage.png";

function Home() {
  return (
    <div className="flex flex-col items-center mt-10 px-4">

      <img
        src={collageImage}
        alt="ArtRoom Home Collage"
        className="rounded-xl shadow-lg w-full max-w-4xl"
      />
    </div>
  );
}

export default Home;
