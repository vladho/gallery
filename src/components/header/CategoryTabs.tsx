import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { getTopics } from '@/services/api';


type Category = {
  slug: string;
};

const CategoryTabs: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    setTabValue(0);
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
    <Box sx={{ overflowX: 'auto', width: '100%' }}>
    <Tabs 
    value={tabValue} 
    onChange={handleTabChange} 
    variant="scrollable"
  scrollButtons="auto"
  allowScrollButtonsMobile

  sx={{ 
    // flexGrow: 1,
    // maxWidth: '60%',
    // overflowX: "auto",
    // whiteSpace: 'nowrap',
    
    '& .MuiTab-root': {
      // minWidth: '100px',
      padding: '6px 12px',
      fontSize: '0.875rem',
      '&.Mui-selected': {  
        backgroundColor: 'rgba(0, 0, 0, 0.08)', 
        borderRadius: '4px',  
      },
    },
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center',
    },
    '& .MuiTabs-indicator': {  
      height: '3px', 
    },
    
  }} 
  
>     
<Tab key="all" label="All" />

  {category.map((el, index) => (
    <Tab key={index} label={el.slug} />
  ))}
</Tabs>
</Box>
  );
};

export default CategoryTabs;