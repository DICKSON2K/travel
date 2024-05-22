import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
       <Appbar position='static'>
        <Toolbar className={ClassNames.toolbar}>
            <Typography variant="h5" className={ClassNames.title}>
                travel advisor

            </Typography>
        </Toolbar>
       </Appbar>
    );
};

export default Header;