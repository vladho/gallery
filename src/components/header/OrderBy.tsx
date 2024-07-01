import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageSelector } from '@/redux/gallery/gallerySelector';
import { setCurrentPage } from '@/redux/gallery/galleryReducer';

const OrderBy: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<string>('popular');

  const menuItemOptions = ["popular","oldest","latest","downloads"]
  
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const router = useRouter();

  // const  currentPage = useSelector(getCurrentPageSelector)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOrderSelect = (order: string, href: string) => {
    setSelectedOrder(order);
    handleClose();
    router.push({pathname: `${href}`, query: { page: 1}})
    dispatch(setCurrentPage(1))

  };


  return (
    <Box sx={{width:"105px"}}>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        sx={{ mr: 2, textTransform: 'none'}}
      >
       {selectedOrder}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
         {menuItemOptions.map((option) => (
          <MenuItem key={option} onClick={() => handleOrderSelect(option, `/${option}`)}>
            {option}
          </MenuItem>
        ))}
        
      </Menu>
    </Box>
  );
};

export default OrderBy;
