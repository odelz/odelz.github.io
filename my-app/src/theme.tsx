import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#cbff00",
      contrastText: '#000000',
    },
    
  },
});

export default theme