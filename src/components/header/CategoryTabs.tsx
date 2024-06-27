import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const CategoryTabs: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Tabs value={tabValue} onChange={handleTabChange} sx={{ flexGrow: 1 }} centered>
      <Tab label="Категорія 1" />
      <Tab label="Категорія 2" />
      <Tab label="Категорія 3" />
    </Tabs>
  );
};

export default CategoryTabs;