import React from 'react';
import {
  ListItemText,
  ListItemTextProps as ListItemTextPropsMUI,
} from '@mui/material';

interface ListItemTextProps extends ListItemTextPropsMUI {
  primary: string;
}
export const ListItemTextStyled = ({
  primary,
  ...props
}: ListItemTextProps) => {
  return (
    <ListItemText
      className="font-serif text-slate-600	 font-normal	text-xs	leading-5 "
      primary={primary}
      {...props}
    />
  );
};
