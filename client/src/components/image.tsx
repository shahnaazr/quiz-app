// Image.tsx
import React from 'react';

type ImageProps = {
  image?: string;
};

const Image: React.FC<ImageProps> = ({ image }) => {
  return image && <img src={image} alt="category" />;
};

export default Image;
