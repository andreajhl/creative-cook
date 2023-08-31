import { Nutrients, Recipe, RecipeList } from '@/interfaces/client';
import { showWithPoints } from '@/utils/numbers';

const extractRecipeId = (url: string): string => {
  const [, id] = url.split('_');
  return id;
};

export const normalizeRecipeList = (recipeList: any[]): RecipeList[] => (
  recipeList.map(({ recipe: item }) => ({
    id: extractRecipeId(item.uri),
    title: item.label,
    image: item.image,
    quantityIngredients: item.ingredients.length,
    calories: showWithPoints(Math.round(item.calories))
  }))
);

const normalizeNutrients = (nutrients: any[]): Nutrients[] => {
  return nutrients.map(item => {
    const formatValue = showWithPoints(Math.round(item.quantity));

    return {
      title: item.label,
      value: `${formatValue} ${item.unit}`
    };
  });
};

export const normalizeRecipe = (item: any): Recipe => {
  const tags = item.dietLabels.length > 3 ? item.dietLabels.splice(0, 2) : item.dietLabels;

  return {
    id: extractRecipeId(item.uri),
    title: item.label,
    image: item.image,
    tags,
    ingredients: item.ingredientLines,
    nutrients: normalizeNutrients(Object.values(item.totalNutrients)),
    portions: Math.round(item.yield),
    calories: showWithPoints(Math.round(item.calories))
  };
};
