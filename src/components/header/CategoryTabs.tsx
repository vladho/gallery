import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { getTopics } from '@/services/api';

const CategoryTabs: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const allCategory = await getTopics();
      setCategory(allCategory);

    };

    fetchCategory();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Tabs value={tabValue} onChange={handleTabChange} sx={{ flexGrow: 1 }} centered>
      {category.map(el=><Tab label={el.slug} />)}

    </Tabs>
  );
};

export default CategoryTabs;