// Image.tsx
import React from 'react';

type ImageProps = {
  imageUrl?: string;
};

const Image: React.FC<ImageProps> = ({ imageUrl }) => {
  return (
    <div className="">
      {imageUrl && <img className="w-20 sm:w-28" src={imageUrl}  alt="Thinking brain" />}
    </div>)
};

export default Image;
