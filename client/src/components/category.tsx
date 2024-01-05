// Category.tsx
import React from 'react';

type CategoryProps = {
  category: string;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  return <h3>{category}</h3>;
};

export default Category;
