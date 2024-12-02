import Image from "next/image";
import Link from "next/link";
import categories from "../data/categories";
import recipes from "../data/recipes";

const categoryCount = recipes.reduce((acc, recipe) => {
  acc[recipe.category_id] = (acc[recipe.category_id] || 0) + 1;
  return acc;
}, {});

const sortedCategories = Object.entries(categoryCount)
  .sort(([, countA], [, countB]) => countB - countA)
  .slice(0, 6);

const topCategories = sortedCategories.map(([categoryId, recipeCount]) => {
  const category = categories.find((c) => c.id === categoryId);
  return {
    ...category,
    recipeCount,
  };
});
const PopularCategories = () => {
  return (
    <section className="mb-16">
      <header className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </header>
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {topCategories.map(({ id, name, image, recipeCount }) => (
          <Link
            href={`/categories/recipe/category-list/${id}`}
            key={recipeCount}
            className="cursor-pointer text-center group"
          >
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={80}
                height={80}
                priority={recipeCount < 3}
              />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">
              {name}
            </p>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default PopularCategories;
