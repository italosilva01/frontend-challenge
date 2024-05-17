import React from 'react';
import { useProduct } from '../../context/ProductContext';
import { AllProducts } from './AllProducts';
import { render } from '@testing-library/react';
import { Product } from '../../@types/types';
useProduct;

const mockUseProduct = jest.fn();
jest.mock('../../context/ProductContext', () => {
  return {
    useProduct: jest.fn(),
  };
});

const mockProducts = [
  {
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
    name: 'Camiseta evening',
    price_in_cents: 5859,
    id: '2bfe252f-c2d1-4bcc-b3c3-552e549df9ac',
  },
  {
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
    name: 'Caneca Decaf! P&Co',
    price_in_cents: 4673,
    id: '3ccbda00-5694-4289-8b08-f1840fe3a89c',
  },
  {
    image_url:
      'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg',
    name: 'Caneca de cerâmica rústica',
    price_in_cents: 5859,
    id: '168b613a-c93f-476e-98b4-4aa6ab71d32a',
  },
];
describe('Test the component what should show all Products', () => {
  beforeEach(() => {
    (useProduct as jest.Mock).mockReturnValue({
      products: mockProducts,
      addProducts: jest.fn(),
    });
  });

  test('Should show all products of home page', () => {
    const { container } = render(
      <AllProducts initProducts={[] as Product[]} />
    );

    expect(container).toMatchSnapshot();
  });
});
