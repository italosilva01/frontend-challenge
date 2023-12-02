import React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useProduct } from '../../context/ProductContext';

interface PaginationStyledProps {
  handlePagination: (e: number) => void;
}
export const PaginationStyled = ({
  handlePagination,
}: PaginationStyledProps) => {
  const { currentPage } = useProduct();

  return (
    <Box>
      <Pagination
        count={2}
        shape="rounded"
        onChange={(_e, value) => {
          handlePagination(value);
        }}
        page={currentPage}
      />
    </Box>
  );
};
