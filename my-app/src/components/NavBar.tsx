import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import {signInWithGoogle}  from ".././config.js"

export default function NavBar() {
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
          < Link color = "#FFFFFF" component={RouterLink} to="/codingportfolio" sx = {{p: 1}}>
            Stuff I've Coded
          </Link>
          < Link color = "#FFFFFF" component={RouterLink} to="/portfolio" sx = {{p: 1}}>
            Design Portfolio
          </Link>
          < Link color = "#FFFFFF" component={RouterLink} to="/calendar" sx = {{p: 1}}>
            Calendar
          </Link>
          <Link color = "#FFFFFF" onClick={signInWithGoogle}>
            Log In With Google
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
