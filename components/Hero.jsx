import Image from "next/image";
import Link from "next/link";
import recipes from "../data/recipes";

const Hero = () => {
  const recipeDetails = recipes[1];

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/thumbs/${recipeDetails.thumbnail}`}
            alt={recipeDetails.title}
            className="w-full h-[450px] object-cover rounded-lg"
            width={100}
            height={20}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{recipeDetails.title}</h1>{" "}
          {/* Use the title string */}
          <p className="text-gray-600 mb-4">{recipeDetails.description}</p>
          <Link
            href={`/categories/recipe/${recipeDetails.title
              .split(" ")
              .join("-")
              .replace(/[^\w\-]+/g, "")}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
