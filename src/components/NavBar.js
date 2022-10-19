import { AppBar } from '@mui/material';
import { Typography } from '@mui/material';
import { Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import React from 'react';




const NavBar = () =>{
    return(
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' flexGrow={1}>
                    ABCD CAKE APP
                </Typography>
                <Button variant='text' color='inherit' startIcon={<LoginIcon/>}>
                    Login
                </Button>
                <Button variant='text' color='inherit' endIcon={<LogoutIcon/>}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;