import Image from "next/image";
import Link from "next/link";
import categoryData from "../../../../../data/categories.json";
import recipes from "../../../../../data/recipes.json";
const page = ({ params: { recipeId } }) => {
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category_id === recipeId
  );

  const getCategoryName = (id) => {
    const category = categoryData.find((cat) => cat.id === id);
    return category ? category.name : "Unknown Category";
  };

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {getCategoryName(recipeId)}
            <span className="text-gray-500 text-2xl font-normal">
              ({filteredRecipes.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredRecipes.map((recipe, index) => (
          <Link
            href={`/categories/recipe/${recipe.title
              .split(" ")
              .join("-")
              .replace(/[^\w\-]+/g, "")}`}
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={`/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              width={100}
              height={20}
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default page;
