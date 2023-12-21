import React, { useState } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';

import { ListItemTextStyled } from './ListItemTextStyled';
import { ButtonFilter } from './components/ButtonFilter';
import { useRequestGraphQl } from '../../hooks/request';

export const Filter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { getFiltedItens } = useRequestGraphQl();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
