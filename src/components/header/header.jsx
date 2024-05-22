import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Title,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  CustomToolbar,
  FlexBox,
} from './styles'; // Import the styled components

const Header = () => {
    return (
        <AppBar position='static'>
            <CustomToolbar>
                <Title variant="h5">
                    Travel Advisor
                </Title>
                <FlexBox>
                    <Title variant="h6">
                        Explore New Places
                    </Title>
                    {/*<Autocomplete>*/}
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase 
                                placeholder="Search..."
                            />
                        </Search>
                    {/*<Autocomplete>*/}
                </FlexBox>
            </CustomToolbar>
        </AppBar>
    );
};

export default Header;
