import React, { useState } from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Пошук за запитом:', searchQuery);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  return (
    <Box sx={{ 
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px',
      padding: '2px 4px',
    }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Пошук"
        inputProps={{ 'aria-label': 'search parameters' }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;