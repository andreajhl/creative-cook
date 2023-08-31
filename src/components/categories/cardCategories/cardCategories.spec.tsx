import { render } from '@testing-library/react';
import { categories } from '@/constants/categories';
import CardCategory from '.';

const [category] = categories;
const renderCardCategory = () => render( <CardCategory { ...category } /> );

describe('<CardCategory />', () => {
  test('basic render', () => {
    renderCardCategory();
  });

  test('navigates to the correct URL when clicked', () => {
    const { getByRole } = renderCardCategory();
    const cardCategory = getByRole('link');
    expect(cardCategory.getAttribute('href')).toBe(`/category/${category.id}`);
  });
});
