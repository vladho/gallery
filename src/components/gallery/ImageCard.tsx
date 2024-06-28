import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ImageItem } from './types';
import ImageStats from './ImageStats';

interface ImageCardProps {
  image: ImageItem;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const getRandomViews = () => Math.floor(Math.random() * 2500);
  const getRandomComments = () => Math.floor(Math.random() * 100);

  return (
    <Box>
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: 'cover' }}
          image={image.urls.regular}
          alt={image.alt_description}
        />
        <CardContent sx={{ flexGrow: 1, p: 0 }}>
          <ImageStats 
            views={getRandomViews()} 
            comments={getRandomComments()} 
            likes={image.likes} 
          />
        </CardContent>
      </Card>
      <Typography 
        sx={{ 
          mt: '10px',
        }}
      >
        {image.alt_description}
      </Typography>
    </Box>
  );
};

export default ImageCard;