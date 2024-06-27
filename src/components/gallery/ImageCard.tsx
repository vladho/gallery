// ImageCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ImageItem } from './types';
import ImageStats from './ImageStats';

interface ImageCardProps {
  image: ImageItem;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const getRandomWievs = () => {
    return Math.floor(Math.random() * 2500);
  }
  const getRandomComments = () => {
    return Math.floor(Math.random() * 100);
  }

  return (<>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: 'cover' }}
        image={image.urls.regular}
        alt={image.alt_description
        }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <ImageStats views={getRandomWievs()} comments={getRandomComments()} likes={image.likes} />
      </CardContent>
    </Card>
        <Typography variant="h5" component="h2">
          {image.alt_description
          }
        </Typography>
        </>
  );
};

export default ImageCard;
