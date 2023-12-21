import { gql } from 'graphql-request';
import { grapQLClient } from '../services/graphiqlClient';
import { useNavigation } from '../context/NavigationContext';
import { useProduct } from '../context/ProductContext';
import { Product, TabType } from '../@types/types';

export const useRequestGraphQl = () => {
  const { page, changePage, categoryProduct, changeCategory } = useNavigation();
  const { addProducts } = useProduct();
  const firstPage = 1;

  const getTabFor = async (value: TabType) => {
    changePage(firstPage);
    changeCategory(value);

    const isAllProductsTab = value === 'all' || categoryProduct === 'all';
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(filter: { ${
          isAllProductsTab ? '' : `category: "${value}"`
        } }, perPage: 12, page: 1) {
          image_url
          name
          sales
          price_in_cents
          created_at
        }
      }
    `);

    addProducts(allProducts);
  };
  const getFiltedItens = async (valueFilter: string, order: string = '') => {
    const { allProducts } = await grapQLClient.request(gql`
        query {
          allProducts(page: ${page}, sortOrder: "${valueFilter}", sortField: "${valueFilter}") {
              image_url
          name
          sales
          price_in_cents
          created_at
          }
        }
      `);
    const newProducts = allProducts as unknown as Product[];

    if (valueFilter === 'create_at') {
      addProducts(
        newProducts.sort((a, b) => (a.created_at > b.created_at ? 1 : -1))
      );
    } else if (valueFilter === 'price_in_cents') {
      if (order === 'smaller-bigger') {
        addProducts(
          newProducts.sort((prodA, prodB) =>
            prodA.price_in_cents > prodB.price_in_cents ? 1 : -1
          )
        );
      } else {
        addProducts(newProducts);
      }
    } else {
      addProducts(newProducts);
    }
  };
  const handlePagined = async (newPage: number) => {
    const isCategoryAll = categoryProduct === 'all';
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: ${newPage},perPage: 12,${
      !isCategoryAll ? `filter: {category:"${categoryProduct}"}` : ''
    }) {
          image_url
          name
          price_in_cents
        }
      }
  `);
    changePage(newPage);
    addProducts(allProducts);
  };

  return { getFiltedItens, handlePagined, getTabFor };
};
