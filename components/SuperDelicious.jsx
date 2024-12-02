import Image from "next/image";
import Link from "next/link";
import recipes from "../data/recipes.json";
import Rating from "./Rating";

const SuperDelicious = () => {
  const topRecipes = recipes
    .sort((a, b) => b.ratingCount - a.ratingCount)
    .slice(0, 3);

  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Top Recipes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topRecipes.map((recipe, index) => (
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
            <h3 className="text-xl font-semibold mb-2 font-playfair">
              {recipe.title}
            </h3>
            <div className="flex items-center text-yellow-500 mb-2">
              <Rating rating={recipe.rating.average_rating} />
            </div>
            <p className="text-gray-600">{recipe.cooking_time}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
