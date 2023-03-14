import React from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Button, ButtonBaseProps } from '@mui/material';

export const ButtonFilter = (props: ButtonBaseProps) => {
  return (
    <Button className="text-black" {...props}>
      Organizar por{' '}
      <KeyboardArrowDown className="transition ease-in-out delay-150 {{open?transform:rotate(180deg):transform:rotate(0deg)}}" />
    </Button>
  );
};
