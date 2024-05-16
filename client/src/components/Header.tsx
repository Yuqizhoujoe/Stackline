import React from 'react';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import {LOGO} from "../constant";

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box
                    component="img"
                    src={LOGO}
                    alt="Stackline Logo"
                    sx={{height: 40, marginRight: 2}}
                />
                <Typography variant="h6">Sales Dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
