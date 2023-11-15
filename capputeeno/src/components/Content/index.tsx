import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import { Tab } from '../Tab';
import { Filter } from '../Filter';

interface ContentProps {
  children: ReactNode;
}
export const Content = ({ children }: ContentProps) => {
  return (
    <>
      <div className="flex justify-between p-8">
        <div className="flex ">
          <Tab text="Todos os produtos" active={true} />
          <Tab text="Camisetas" active={false} />
          <Tab text="Canecas" active={false} />
        </div>
        <Filter />
      </div>
      <Box className="px-8">{children}</Box>
    </>
  );
};
