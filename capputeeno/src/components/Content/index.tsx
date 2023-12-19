import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';

import { Tab } from '../Tab';
import { Filter } from '../Filter';
import { TabType } from '../../@types/types';
import { gql } from 'graphql-request';
import { grapQLClient } from '../../services/graphiqlClient';
import { useProduct } from '../../context/ProductContext';
import { useNavigation } from '../../context/NavigationContext';

interface ContentProps {
  children: ReactNode;
}
export const Content = ({ children }: ContentProps) => {
  const [currentTab, setCurrentTab] = useState<TabType>('all');
  const { addProducts } = useProduct();
  const { changePage } = useNavigation();

  const handleChangeTab = (newValueCurrentTab: TabType) => {
    setCurrentTab(newValueCurrentTab);
  };
  const mugs = 'mugs';
  const tShirts = 't-shirts';
  const all = 'all';
  const firstPage = 1;

  const getTabFor = async (value: TabType) => {
    changePage(firstPage);
    const isAllProductsTab = value === all;

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
  return (
    <>
      <div className="flex justify-between p-8 ">
        <div className="flex ">
          <Tab
            text="Todos os produtos"
            active={currentTab === all}
            onClick={() => {
              handleChangeTab(all);
              getTabFor(all);
            }}
          />
          <Tab
            text="Camisetas"
            active={currentTab === tShirts}
            onClick={() => {
              handleChangeTab(tShirts);
              getTabFor(tShirts);
            }}
          />
          <Tab
            text="Canecas"
            active={currentTab === mugs}
            onClick={() => {
              handleChangeTab(mugs);
              getTabFor(mugs);
            }}
          />
        </div>
        <Filter />
      </div>
      <Box className="px-8">{children}</Box>
    </>
  );
};
