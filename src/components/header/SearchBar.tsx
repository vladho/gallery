import React, { useState } from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, searchImages } from '@/redux/gallery/galleryReducer';
import { getSearchPhotos } from '@/services/api';

interface RootState {
  gallery: {
    filter: string; 
  };
}

const SearchBar: React.FC = () => {
 
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  // const search = useSelector((state: RootState) => state.gallery.filter);


  const handleSearch = () => {
    console.log('Пошук за запитом:', search);
  };

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const images = await getSearchPhotos(event.currentTarget.value)
    console.log(event.currentTarget.value);
    setSearch(event.currentTarget.value)
    console.log(images);
    // dispatch(addImage(images));

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
        value={search}
        onChange={handleSearchChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;