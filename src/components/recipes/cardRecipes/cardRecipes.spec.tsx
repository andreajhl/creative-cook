import { render } from '@testing-library/react';
import { RECIPE_LIST_NORMALIZE } from '@/mocks/recipes';
import CardRecipe from '.';

const [RECIPE_ITEM] = RECIPE_LIST_NORMALIZE;

const renderCardProduct = () => render(< CardRecipe { ...RECIPE_ITEM }/>);

describe('ProductCard />', () => {
  test('renders ProductCard correctly', () => {
    const { getByText } = renderCardProduct();

    const titleElement = getByText(RECIPE_ITEM.title);
    expect(titleElement).toBeDefined();
  });

  test('when clicking the title executes redirect', () => {
    const { getByRole } = renderCardProduct();

    const titleLink = getByRole('link', { name: RECIPE_ITEM.title });
    expect(titleLink.getAttribute('href')).toBe(`/items/${RECIPE_ITEM.id}`);
  });
});
