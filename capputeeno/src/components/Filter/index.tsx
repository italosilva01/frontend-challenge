import { useState, MouseEvent } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { gql } from 'graphql-request';
import { parseISO, format } from 'date-fns';

import { ListItemTextStyled } from './ListItemTextStyled';
import { grapQLClient } from '../../services/graphiqlClient';
import { useProduct } from '../../context/ProductContext';
import { Product } from '../../@types/types';
import { ButtonFilter } from './components/ButtonFilter';

export const Filter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { addProducts } = useProduct();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getFiltedItens = async (valueFilter: string, order: string = '') => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: 1, sortOrder: "${valueFilter}", sortField: "${valueFilter}") {
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
      return;
    }
    if (valueFilter === 'price_in_cents') {
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

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;

  return (
    <Box>
      <ButtonFilter aria-describedby={id} type="button" onClick={handleClick} />
      <Menu id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            getFiltedItens('create_at');
            handleClose();
          }}
        >
          <ListItemTextStyled primary="Novidades" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            getFiltedItens('price_in_cents');
            handleClose();
          }}
        >
          <ListItemTextStyled primary="Preço: Maior - menor" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            getFiltedItens('price_in_cents', 'smaller-bigger');
            handleClose();
          }}
        >
          <ListItemTextStyled primary="Preço: Menor - maior" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            getFiltedItens('sales');
            handleClose();
          }}
        >
          <ListItemTextStyled primary="Mais vendidos" />
        </MenuItem>
      </Menu>
    </Box>
  );
};
