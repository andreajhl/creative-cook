import { render, fireEvent } from '@testing-library/react';
import Pagination from '.';

const basicProps = {
  currentPage: 0,
  setItems: jest.fn(),
  setCurrentPag: jest.fn(),
  getNewItemsPage: jest.fn(),
};

beforeEach(() => { jest.clearAllMocks(); });

const renderPagination = (newProps = {}) => {
  const props = { ...basicProps, ...newProps };

  return render (<Pagination { ...props } />);
};

describe('<Pagination />', () => {
  test('renders pagination correctly', () => {
    renderPagination();
  });

  test('should enable prev button on second page', () => {
    const { getByTestId } = renderPagination({ currentPage: 2 });

    const prevButton = getByTestId('prev-button');
    expect(prevButton.getAttribute('disabled')).toBeNull();
  });

  test('should disable next button on last page', () => {
    const { getByTestId } = renderPagination({ currentPage: 3 });

    const nextButton = getByTestId('next-button');
    expect(nextButton.getAttribute('disabled')).toBe("");
  });

  test('should call setCurrentPag and setItems when next button is clicked', () => {
    const { getByTestId } = renderPagination();

    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);

    expect(basicProps.setCurrentPag).toHaveBeenCalledWith(1);
    expect(basicProps.setItems).toHaveBeenCalled();
  });

  test('should call setCurrentPag and setItems when prev button is clicked', () => {
    const { getByTestId } = renderPagination({ currentPage: 1 });

    const prevButton = getByTestId('prev-button');
    fireEvent.click(prevButton);

    expect(basicProps.setCurrentPag).toHaveBeenCalledWith(0);
    expect(basicProps.setItems).toHaveBeenCalled();
  });
});
