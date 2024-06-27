// OrderBy.tsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const OrderBy: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOrder, setSelectedOrder] = useState<string>('За замовчуванням');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOrderSelect = (order: string) => {
    setSelectedOrder(order);
    handleClose();
    // Тут можна додати логіку для зміни порядку сортування в галереї
    console.log(`Обрано сортування: ${order}`);
  };

  return (
    <>
      <Button
        color="inherit"
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick}
        sx={{ mr: 2 }}
      >
        Сортувати: {selectedOrder}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleOrderSelect('За замовчуванням')}>За замовчуванням</MenuItem>
        <MenuItem onClick={() => handleOrderSelect('За назвою')}>За назвою</MenuItem>
        <MenuItem onClick={() => handleOrderSelect('За датою')}>За датою</MenuItem>
        <MenuItem onClick={() => handleOrderSelect('За популярністю')}>За популярністю</MenuItem>
      </Menu>
    </>
  );
};

export default OrderBy;