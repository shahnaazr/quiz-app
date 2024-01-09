type CategoryProps = {
  category?: string;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <>
      {category && <h1 className="text-center text-primary  text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-5">{category}</h1>}
    </>
  );
};

export default Category;

