import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { getTopics } from '@/services/api';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPageSelector } from '@/redux/gallery/gallerySelector';


type Category = {
  slug: string;
};

const CategoryTabs: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [category, setCategory] = useState<Category[]>([]);
  const [orderBy,setOrderBy] = useState("");
  // const [categoryBy,setCategoryBy] = useState("")

const dispatch = useDispatch();
const  currentPage = useSelector(getCurrentPageSelector)

const router = useRouter();
const order = router.query.order;


  useEffect(() => {
    setTabValue(0);
    const fetchCategory = async () => {
      try {
      const allCategory = await getTopics();
      setCategory(allCategory);
    }catch (err) { console.log(err); }}

    fetchCategory();
  }, [dispatch]);


  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCategorySelect = async ( href: string) => {
        router.push({pathname: `/${order}/${href}`, query: { page: currentPage}})
  }
  
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
<Tab key="all" label="All" onClick={()=>router.push({pathname: `/${order}`})}/>
  {category.map((el, index) => (
    <Tab key={index} label={el.slug} onClick={()=>handleCategorySelect(`${el.slug}`)}/>
  ))}
</Tabs>
</Box>
  );
};

export default CategoryTabs;