import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import NavBar from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

(useRouter as jest.Mock).mockReturnValue({
  query: { category: 'test', offset: '0' },
  push: jest.fn((params: any) => params)
});

const renderNavBar = () => render (<NavBar />);

describe('<NavBar />', () => {
  test('renders correctly', () => {
    renderNavBar();
  });
});
