import React from "react";

const ImageContainer = () => {
  return (
    <div className="relative overflow-hidden rounded-md hover:cursor-zoom-in">
      <img
        className="w-full h-64 object-cover"
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
        alt="_image name"
      />
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl mt-14 text-center text-dodge-blue font-bold">
        Our Gallery
      </h1>
      <div className="grid gap-5 grid-cols-4 my-16">
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
      </div>
    </div>
  );
};

export default Gallery;
