import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, Link as RouterLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar >
          < Link variant = "h6" color = "#FFFFFF" underline="none" component={RouterLink} to="/" sx = {{p: 1}}>
            Odelia Huang
          </Link>
          < Link color = "#FFFFFF" component={RouterLink} to="/inspiration" sx = {{p: 1}}>
            Inspiration
          </Link>
          < Link color = "#FFFFFF" component={RouterLink} to="/portfolio" sx = {{p: 1}}>
            Fine Arts Portfolio
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
