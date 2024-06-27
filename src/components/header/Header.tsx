import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, IconButton, Box, InputBase } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    console.log('Пошук за запитом:', searchQuery);
    // Тут можна додати логіку для виконання пошуку
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Button
          color="inherit"
          endIcon={<ArrowDropDownIcon />}
          onClick={handleClick}
          sx={{ mr: 2 }}
        >
          Меню
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box sx={{ 
          position: 'absolute', 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          padding: '2px 4px',
        }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Введіть параметри пошуку"
            inputProps={{ 'aria-label': 'search parameters' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Опція 1</MenuItem>
          <MenuItem onClick={handleClose}>Опція 2</MenuItem>
          <MenuItem onClick={handleClose}>Опція 3</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;