import { render, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Search from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

(useRouter as jest.Mock).mockReturnValue({
  push: jest.fn((params: any) => params)
});

beforeEach(() => {
  jest.clearAllMocks();
});

const renderSearch = () => render(<Search />);

describe('<Search />', () => {
  test('renders Search correctly', () => {
    renderSearch();
  });

  test('should update search state on input change', () => {
    const { getByRole } = renderSearch();

    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  test('should redirect on form submission', async () => {
    const { getByRole } = renderSearch();

    const input = getByRole('textbox') as HTMLInputElement;
    const submitButton = getByRole('button');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(useRouter().push).toHaveBeenCalledWith("/items?search=test");
    });
  });
});
