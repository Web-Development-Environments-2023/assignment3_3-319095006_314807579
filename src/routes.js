import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("./pages/MainPage"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/users/myRecipes",
    name: "myRecipes",
    component: () => import("./pages/MyRecipesPage")
  },
  {
    path: "/users/favorites",
    name: "myFavorites",
    component: () => import("./pages/myFavoritesPage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage")
  },
  {
    path: "/users/myFamilyRecipes",
    name: "myFamilyRecipes",
    component: () => import("./pages/FamilyRecipesPage")

  },

  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "recipes/fullview",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),

  }
];

export default routes;
