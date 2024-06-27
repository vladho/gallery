import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';

const OrderBy: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<string>('popular');
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOrderSelect = (order: string, href: string) => {
    setSelectedOrder(order);
    handleClose();
    router.push(href); 
  };

  const menuItemOptions = ["popular","oldest","views","latest","downloads"]

  return (
    <Box >
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
