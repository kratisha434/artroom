 import React from "react";
import collageImage from "../assets/homepage.png";

function Home() {
  return (
    <div className="flex justify-center items-center mt-10 px-4">
      <img
        src={collageImage}
        alt="ArtRoom Home Collage"
        className="rounded-xl shadow-md max-w-[600px] w-full object-cover"
      />
    </div>
  );
}

export default Home;

