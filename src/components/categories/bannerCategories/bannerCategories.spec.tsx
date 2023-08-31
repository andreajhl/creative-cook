import { render } from '@testing-library/react';
import { categories } from '@/constants/categories';
import BannerCategories from '.';

const renderBannerCategories = () => render( <BannerCategories />);

describe('<BannerCategories />', () => {
  test('basic render', () => {
    renderBannerCategories();
  });

  test('renders the correct number of CardCategory components', () => {
    const { getAllByTestId } = renderBannerCategories();

    const renderedCardCategories = getAllByTestId('card-category');
    expect(renderedCardCategories).toHaveLength(categories.length);
  });
});
