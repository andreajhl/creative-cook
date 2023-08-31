import { render } from '@testing-library/react';
import RecipeDetail from '.';
import { RECIPE_NORMALIZE } from '@/mocks/recipes';

const renderRecipeDetail = (props = {}) =>{
  const basicProps = { ...RECIPE_NORMALIZE, ...props };

  return render( <RecipeDetail { ...basicProps } />);
};

describe('<RecipeDetail />', () => {
  test('correctly render', () => {
    const { getByText } =  renderRecipeDetail();
    expect(getByText(RECIPE_NORMALIZE.title)).toBeDefined();
  });
});
