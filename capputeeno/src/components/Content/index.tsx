import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';

import { Tab } from '../Tab';
import { Filter } from '../Filter';
import { TabType } from '../../@types/types';

import { useRequestGraphQl } from '../../hooks/request';

interface ContentProps {
  children: ReactNode;
}
export const Content = ({ children }: ContentProps) => {
  const [currentTab, setCurrentTab] = useState<TabType>('all');
  const { getTabFor } = useRequestGraphQl();

  const handleChangeTab = (newValueCurrentTab: TabType) => {
    setCurrentTab(newValueCurrentTab);
  };
  const mugs = 'mugs';
  const tShirts = 't-shirts';
  const all = 'all';

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
