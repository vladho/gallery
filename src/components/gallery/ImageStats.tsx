// ImageStats.tsx
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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <VisibilityIcon fontSize="small" sx={{ mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {views}
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          переглядів
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" aria-label="comments">
            <CommentIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {comments}
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          коментарів
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" aria-label="like">
            <ThumbUpIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {likes}
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          лайків
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageStats;
