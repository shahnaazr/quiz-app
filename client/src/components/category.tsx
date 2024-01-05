// Category.tsx
import React from 'react';

type CategoryProps = {
  category: string;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  return <h1>{category}</h1>;
};

export default Category;
