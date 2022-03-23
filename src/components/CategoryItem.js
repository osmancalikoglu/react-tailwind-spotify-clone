const CategoryItem = ({ category }) => {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotify w-[6.25rem] h-[6.25rem] absolute right-0 bottom-0 rotate-[25deg] translate-x-[18%] translate-y-[5%]"
        />
      </div>
    </div>
  );
};

export default CategoryItem;
