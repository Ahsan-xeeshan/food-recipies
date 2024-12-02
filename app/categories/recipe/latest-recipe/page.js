import Image from "next/image";
import Link from "next/link";
import categoryData from "../../../../data/categories.json";
import recipes from "../../../../data/recipes";

const LatestReceips = () => {
  const latestRecipes = [...recipes]
    .sort(
      (a, b) =>
        new Date(b.published_date).getTime() -
        new Date(a.published_date).getTime()
    )
    .slice(0, 8);

  const getCategoryName = (id) => {
    const category = categoryData.find((cat) => cat.id === id);
    return category ? category.name : "Unknown Category";
  };

  return (
    <section className="mb-16 container mx-auto pt-24">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((recipe, index) => (
          <Link
            href={`/categories/recipe/${recipe.title
              .split(" ")
              .join("-")
              .replace(/[^\w\-]+/g, "")}`}
            key={index}
          >
            <Image
              src={`/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              width={100}
              height={20}
            />
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600">
              {getCategoryName(recipe.category_id)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestReceips;
