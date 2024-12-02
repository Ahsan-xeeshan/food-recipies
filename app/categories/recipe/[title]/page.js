import Image from "next/image";
import Link from "next/link";
import recipes from "../../../../data/recipes.json";

const page = ({ params: { title } }) => {
  const slugify = (text) => {
    return text
      .split(" ")
      .join("-")
      .replace(/[^\w\-]+/g, "");
  };

  const post = recipes.find((post) => {
    const slugifiedTitle = slugify(post.title);
    return slugifiedTitle === title;
  });

  console.log(post);
  const selectedId = post.category_id;
  console.log(selectedId);

  // Create a map for categories to group recipes by category_id
  const categoryMap = {};
  recipes.forEach((item) => {
    if (categoryMap[item.category_id]) {
      categoryMap[item.category_id].push(item);
    } else {
      categoryMap[item.category_id] = [item];
    }
  });

  // Find recipes in the same category as the current post
  const relatedRecipes = categoryMap[selectedId] || [];

  // Remove the current post from the related recipes list to avoid showing it
  const filteredRelatedRecipes = relatedRecipes.filter(
    (item) => slugify(item.title) !== title
  );

  console.log(filteredRelatedRecipes);

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <Image
            src="/avater.png"
            alt="Author"
            className="w-8 h-8 rounded-full"
            width={100}
            height={20}
          />
          <span className="text-gray-600">{post.author}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{post.cooking_time}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{post.published_date}</span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Save
            </button>
          </div>
        </div>
        <Image
          src="/single-banner.jpg"
          alt="Cooking Image"
          className="w-full h-auto mb-8 rounded-lg"
          width={100}
          height={20}
        />
        <p className="text-gray-600 mb-8">
          One thing I learned living in the Catskills section of Brooklyn, NY
          was how to cook a good Italian meal. Here is a recipe I created after
          having this dish in a restaurant. Enjoy!
        </p>

        <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
        <p className="mb-8">
          Food qualities braise chicken cuts bowl through slices butternut
          snack. Tender meat juicy dinners. One-pot low heat plenty of time
          adobo fat raw soften fruit. sweet renders bone-in marrow richness
          kitchen, fricassee basted putter.
        </p>

        <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
        <p className="mb-8">
          Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>

        <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
          "One cannot think well, love well, sleep well, if one has not dined
          well."
        </blockquote>
        <p className="text-center text-gray-600 mb-12">
          — Virginia Woolf, A Room of One's Own
        </p>

        <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
        <p className="mb-8">
          Gastronomy atmosphere set aside. Slice butternut cooking home.
          Delicious romantic undisturbed raw platter will meld. Thick Skewers
          skillet natural, smoker soy sauce wait roux. slices rosette bone-in
          simmer. Romantic fall-off-the-bone butternut chuck under romas,
          Skewers on culinary experience.
        </p>

        <Image
          src={`/thumbs/${post.thumbnail}`}
          alt={post.title}
          className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
          width={100}
          height={20}
        />

        <p className="mb-8">
          Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
          sauce burgers brisket. polenta mustard hunk greens. Wine technique
          snack skewers chuck excess. Oil heat slowly. slices natural delicious,
          set aside magic tbsp skillet, bay leaves brown centerpiece. fruit
          soften edges frond slices onion snack pork steem on wines excess
          technique cup; Cover smoker soy sauce.
        </p>
      </article>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredRelatedRecipes.map((recipe) => (
            <Link
              href={`/categories/recipe/${recipe.title
                .split(" ")
                .join("-")
                .replace(/[^\w\-]+/g, "")}`}
              key={recipe.category_id + recipe.title}
            >
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                className="w-full h-60 object-cover rounded-lg mb-2"
                width={100}
                height={20}
              />
              <h3 className="font-semibold">{recipe.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
