import React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { useNavigation } from '../../context/NavigationContext';

interface PaginationStyledProps {
  handlePagination: (e: number) => void;
  currentPage: number;
}
export const PaginationStyled = ({
  handlePagination,
  currentPage,
}: PaginationStyledProps) => {
  const numberTotalPagesAPI = 2;
  const { page } = useNavigation();
  return (
    <Box>
      <Pagination
        count={numberTotalPagesAPI}
        shape="rounded"
        onChange={(_e, value) => {
          handlePagination(value);
        }}
        page={page}
      />
    </Box>
  );
};
