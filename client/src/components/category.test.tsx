import { render } from '@testing-library/react';
import Category from './category';


test('renders category text', () => {
  const { getByText } = render(<Category category="Sample Category" />);
  const categoryElement = getByText('Sample Category');
  expect(categoryElement).toBeInTheDocument();
});

// Test for rendering with different categories
test('renders different category text', () => {
    const { getByText, rerender } = render(<Category category="Category 1" />);
    const categoryElement = getByText('Category 1');
    expect(categoryElement).toBeInTheDocument();
  
    // Rerender the component with a different category prop
    rerender(<Category category="Category 2" />);
    const updatedCategoryElement = getByText('Category 2');
    expect(updatedCategoryElement).toBeInTheDocument();
  });