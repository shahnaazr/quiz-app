// Image.tsx
import React from 'react';

type ImageProps = {
  imageUrl?: string;
};

const Image: React.FC<ImageProps> = ({ imageUrl }) => {
  return (
    <div className="flex justify-between">
      {imageUrl && <img className="" src={imageUrl}  alt="Thinking brain" width={130} />}
    </div>)
};

export default Image;
