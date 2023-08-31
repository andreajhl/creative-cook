import { fireEvent, render } from '@testing-library/react';
import { carouselImages } from '@/constants/carousel';
import Carousel from '.';
import wordings from '@/wordings';

const renderCarousel = () => render(<Carousel pictures={carouselImages} />);

describe('<Carousel />', () => {
  test('renders correctly', () => {
    renderCarousel();
  });

  test('should change to next slide when next button is clicked', async () => {
    const { getByText, queryByText } = renderCarousel();

    const nextButton = getByText(wordings.carousel.next);

    const imageElement = queryByText(carouselImages[1].title);
    expect(imageElement).toBeNull();

    fireEvent.click(nextButton);
    expect(imageElement).toBeDefined();
  });
});
