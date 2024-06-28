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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
      {[
        { icon: <VisibilityIcon fontSize="small" />, value: views, label: 'переглядів' },
        { icon: <CommentIcon fontSize="small" />, value: comments, label: 'коментарів' },
        { icon: <ThumbUpIcon fontSize="small" />, value: likes, label: 'лайків' },
      ].map(({ icon, value, label }) => (
        <Box key={label} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" sx={{ p: 0.5 }}>
            {icon}
          </IconButton>
          <Box sx={{ ml: 0.5 }}>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1 }}>
              {value}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1 }}>
              {label}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ImageStats;