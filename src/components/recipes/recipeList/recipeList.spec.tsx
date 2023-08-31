import { render } from '@testing-library/react';
import RecipeList from '.';
import { RecipeList as RecipeItem } from '@/interfaces/client';
import { RECIPE_LIST_NORMALIZE } from '@/mocks/recipes';
import { VISIBLE_PAGES } from '@/constants/pagination';


const renderProductList = (recipeList: RecipeItem[] = RECIPE_LIST_NORMALIZE) =>(
  render(<RecipeList recipeList={recipeList} />)
);

describe('<ProductList />', () => {
  test('correctly render', () => {
    renderProductList(RECIPE_LIST_NORMALIZE);
  });

  test('renders product list and pagination correctly', () => {
    const mockRecipeListLong = new Array(8).fill(RECIPE_LIST_NORMALIZE[0]);
    const { getAllByTestId, getByTestId } = renderProductList(mockRecipeListLong);

    const productCards = getAllByTestId('card-recipe');
    expect(productCards).toHaveLength(VISIBLE_PAGES);

    const pagination = getByTestId('prev-button');
    expect(pagination).toBeDefined();
  });

  test('does not render pagination if totalPage is less than or equal to 1', () => {
    const { queryByTestId } = renderProductList(RECIPE_LIST_NORMALIZE);

    const pagination = queryByTestId('pagination');
    expect(pagination).toBeNull();
  });
});
