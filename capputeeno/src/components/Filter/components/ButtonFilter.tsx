import React from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Button, ButtonProps } from '@mui/material';

export const ButtonFilter = (props: ButtonProps) => {
  return (
    <Button className="text-black" {...props}>
      Organizar por{' '}
      <KeyboardArrowDown className="transition ease-in-out delay-150 {{open?transform:rotate(180deg):transform:rotate(0deg)}}" />
    </Button>
  );
};
