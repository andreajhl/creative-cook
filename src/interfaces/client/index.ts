export interface RecipeItem {
  id: string
  title: string
  thumbnail: string
  price: number
  originalPrice: number | null
  availableQuantity: number
}

export interface Nutrients {
  title: string,
  value: string;
}

export interface RecipeList {
  id: string;
  title: string;
  image: string;
  quantityIngredients: number;
  calories: string;
}

export interface Recipe {
  id: string
  title: string;
  image: string;
  tags: string[];
  ingredients: string[];
  nutrients: Nutrients[],
  portions: number;
  calories: string;
}

export interface GetRecipeByCategory {
  (category: string): Promise<RecipeList[] | undefined>
}

export interface GetRecipes {
  (search: string): Promise<RecipeList[] | undefined>
}

export interface GetRecipeByID {
  (id: string): Promise<Recipe | undefined>
}
