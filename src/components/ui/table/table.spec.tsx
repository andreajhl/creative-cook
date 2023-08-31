import { render } from "@testing-library/react";
import Table from ".";

const props = {
  headers: ['test1', 'test1'],
  rows: [{ title: 'test1', value: '1' }, { title: 'test2', value: '2' }]
};

const renderTable = () => render (<Table { ...props } />);

describe('<Table />', () => {
  test('renders correctly', () => {
    renderTable();
  });
});
