import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
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

  return (
    <>
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
        <MenuItem onClick={() => handleOrderSelect('popular', '/popular')}>
          popular
        </MenuItem>
        <MenuItem onClick={() => handleOrderSelect('oldest', '/oldest')}>
          oldest
        </MenuItem>
        <MenuItem onClick={() => handleOrderSelect('views', '/views')}>
          За кількістю переглядів
        </MenuItem>
        <MenuItem onClick={() => handleOrderSelect('latest', '/latest')}>
          latest
        </MenuItem>
        <MenuItem onClick={() => handleOrderSelect('downloads', '/downloads')}>
          downloads
        </MenuItem>
      </Menu>
    </>
  );
};

export default OrderBy;
