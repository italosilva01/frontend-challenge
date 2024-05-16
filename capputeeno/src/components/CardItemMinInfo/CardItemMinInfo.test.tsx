import React from 'react';
import { render, screen } from '@testing-library/react';

import { CardItemMinInfo } from '.';

const CardItemMinData = {
  productName: 'Product Name',
  productPrice: 'Product Price',
  imageUrl:
    'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
  idProduct: 'Id Product',
};

describe('CardItemMinInfo', () => {
  test('should render CardItemMinInfo', () => {
    const { container } = render(<CardItemMinInfo {...CardItemMinData} />);

    expect(container).toBeInTheDocument();
  });

  test('should show  a name product, image product and value of product', () => {
    const { getAllByTestId } = render(<CardItemMinInfo {...CardItemMinData} />);
    const imageProduct = screen.getByRole('img');
    const nameProduct = screen.getByTestId('product-name');
    const costProduct = screen.getByTestId('product-cost');
    expect(nameProduct).toBeInTheDocument();
    expect(imageProduct).toBeInTheDocument();
    expect(costProduct).toBeInTheDocument();
  });
});
