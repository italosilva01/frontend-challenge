import { useState, MouseEvent } from 'react';
import { Box, Fade, List, Popper, ListItemButton } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { gql } from 'graphql-request';

import { ListItemTextStyled } from './ListItemTextStyled';
import { grapQLClient } from '../../services/graphiqlClient';
import { useProduct } from '../../context/ProductContext';
import { AllProducts } from '../Content/AllProducts';
import { Product } from '../../@types/types';

export const Filter = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { addProducts } = useProduct();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setOpen((previosState) => !previosState);
  };
  const getFiltedItens = async (valueFilter: string, order: string = '') => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: 1, sortOrder: "${valueFilter}", sortField: "${valueFilter}") {
            image_url
        name
        sales
        price_in_cents
        }
      }
    `);
    const newProducts = allProducts as unknown as Product[];
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
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Organizar por{' '}
        <KeyboardArrowDown className="transition ease-in-out delay-150 {{open?transform:rotate(180deg):transform:rotate(0deg)}}" />
      </button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box className="min-w-fit rounded  bg-white shadow-[#50d71e]">
              <List>
                <ListItemButton onClick={() => getFiltedItens('create_at')}>
                  <ListItemTextStyled primary="Novidades" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => getFiltedItens('price_in_cents')}
                >
                  <ListItemTextStyled primary="Preço: Maior - menor" />
                </ListItemButton>
                <ListItemButton
                  onClick={() =>
                    getFiltedItens('price_in_cents', 'smaller-bigger')
                  }
                >
                  <ListItemTextStyled primary="Preço: Menor - maior" />
                </ListItemButton>

                <ListItemButton onClick={() => getFiltedItens('sales')}>
                  <ListItemTextStyled primary="Mais vendidos" />
                </ListItemButton>
              </List>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};
