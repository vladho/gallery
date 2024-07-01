import React, { useState } from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';
import { getSearchPhotos } from '@/services/api';
import { getCurrentPageSelector } from '@/redux/gallery/gallerySelector';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';


const SearchBar: React.FC = () => {
 
  const [search, setSearch] = useState<string | null>("")

  const dispatch = useDispatch();
  const router = useRouter();
  const  currentPage = useSelector(getCurrentPageSelector)

// const searchUrl = searchParams.get('search') ;

const handleSearch = async () => {
  router.push({pathname: `/searchPage`, query: { search, page: currentPage}})
  };

  const handleSearchChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setSearch(searchValue);
    
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