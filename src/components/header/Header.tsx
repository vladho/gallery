import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import OrderBy from './OrderBy';
import CategoryTabs from './CategoryTabs';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <OrderBy />
        <CategoryTabs />
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;