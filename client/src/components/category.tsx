import React from 'react';

type CategoryProps = {
  category?: string;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <>
      {category && <h1 className="text-center text-6xl py-10">{category}</h1>}
    </>
  );
};

export default Category;

