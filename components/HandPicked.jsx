import Image from "next/image";
import Link from "next/link";
import recipes from "../data/recipes";

const HandPicked = () => {
  const getRandomRecipe = () => {
    const shuffled = [...recipes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  };

  const randomRecipe = getRandomRecipe();

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {randomRecipe.map((recipe, index) => (
          <Link
            href={`/categories/recipe/${recipe.title
              .split(" ")
              .join("-")
              .replace(/[^\w\-]+/g, "")}`}
            key={index}
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
          >
            <Image
              src={`/thumbs/${recipe.thumbnail}`}
              alt="Sushi Combos"
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              width={100}
              height={20}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <a
                href="./recipes.html"
                className="text-orange-300 hover:underline"
              >
                View Collection
              </a>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HandPicked;
