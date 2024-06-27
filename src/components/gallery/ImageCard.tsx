// ImageCard.tsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ImageItem } from './types';
import ImageStats from './ImageStats';

interface ImageCardProps {
  image: ImageItem;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (<>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: 'cover' }}
        image={image.url}
        alt={image.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <ImageStats views={image.views} comments={image.comments} likes={image.likes} />
      </CardContent>
    </Card>
        <Typography variant="h5" component="h2">
          {image.title}
        </Typography>
        </>
  );
};

export default ImageCard;
