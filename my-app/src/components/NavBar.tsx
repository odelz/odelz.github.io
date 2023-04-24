import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import {signInWithGoogle}  from ".././config.js"

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary' >
        <Toolbar variant = "dense" sx={{ justifyContent: "space-between"}}>
          < Link variant = "h6" color = "#000000" underline="none" component={RouterLink} to="/" sx = {{p: 1}}>
            Odelia Huang
          </Link>
          <div/>
          <Box>
            < Link color = "#000000" underline="none" component={RouterLink} to="/inspiration" sx = {{p: 1}}>
              Inspiration
            </Link>
            < Link color = "#000000" underline="none" component={RouterLink} to="/portfolio" sx = {{p: 1}}>
              Portfolio
            </Link>
            < Link color = "#000000" underline="none" component={RouterLink} to="/contact" sx = {{p: 1}}>
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
