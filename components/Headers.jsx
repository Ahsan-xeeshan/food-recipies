import Link from "next/link";
import Logo from "./Logo";

const Headers = () => {
  return (
    <header class=" mx-auto px-4 py-6 shadow-lg fixed top-0 w-full bg-white z-50">
      <nav class="container mx-auto flex justify-between items-center">
        <Logo />
        <ul class="hidden md:flex space-x-6">
          <li>
            <Link href="/" class="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/categories" class="hover:text-orange-500">
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/categories/recipe/latest-recipe"
              class="hover:text-orange-500"
            >
              Latest Recipes
            </Link>
          </li>
        </ul>
        <div class="flex items-center space-x-4">
          <a href="#" class="hover:text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Headers;
