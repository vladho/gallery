import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface ImageStatsProps {
  views: number;
  comments: number;
  likes: number;
}

const ImageStats: React.FC<ImageStatsProps> = ({ views, comments, likes }) => {
  return (
<Box sx={{ display: 'flex', justifyContent: 'end', fontSize: '0.8rem', mt:2, mb:2, mr:1.5 }}>
  {[
    { id: 1, icon: <VisibilityIcon fontSize="inherit" />, value: views},
    { id: 2, icon: <CommentIcon fontSize="inherit" />, value: comments},
    { id: 3, icon: <ThumbUpIcon fontSize="inherit" />, value: likes},
  ].map(({ id, icon, value }) => (
    <Box key={id} sx={{ display: 'flex', alignItems: 'center', ml: 1.5 }}>
      <IconButton 
        size="small" 
        sx={{ 
          p: 0, 
          '& .MuiSvgIcon-root': { 
            fontSize: 'inherit' 
          } 
        }}
      >
        {icon}
      </IconButton>
      <Typography 
        variant="caption" 
        color="text.secondary" 
        sx={{ 
          lineHeight: 1, 
          ml: 0.3,
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}
      >
        {value}
      </Typography>
    </Box>
  ))}
</Box>
  );
};

export default ImageStats;