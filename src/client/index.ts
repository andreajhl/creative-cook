import axios from 'axios';
import { normalizeRecipe, normalizeRecipeList } from '@/app/dto';
import { GetRecipeByCategory, GetRecipeByID, GetRecipes } from '@/interfaces/client';

export const getRecipeByCategory: GetRecipeByCategory = async (category) => {
  try {
    const { data } = await axios.get(`/api/category/${category}`);

    return normalizeRecipeList(data);
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeByID: GetRecipeByID = async (id) => {
  try {
    const { data } = await axios.get(`/api/items/${id}`);

    return normalizeRecipe(data);
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeSearch: GetRecipes = async (search) => {
  try {
    const { data } = await axios.get(`/api/items?q=${search}`);

    return normalizeRecipeList(data);
  } catch (error) {
    console.log(error);
  }
};
