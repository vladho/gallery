// Gallery.tsx
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { getImages } from '../../services/api';
import { ImageItem } from './types';
import ImageCard from './ImageCard';

const Gallery: React.FC = () => {
    const defualtImages: ImageItem[] = [
        { id: 1, title: "Зображення 1", url: "https://via.placeholder.com/300x200", views: 100, comments: 15, likes: 30 },
        { id: 2, title: "Зображення 2", url: "https://via.placeholder.com/300x200", views: 150, comments: 20, likes: 45 },
        { id: 3, title: "Зображення 3", url: "https://via.placeholder.com/300x200", views: 80, comments: 10, likes: 25 },
        // Додайте більше зображень за потреби
      ];

  const [images, setImages] = useState<ImageItem[]>([...defualtImages]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const fetchedImages = await getImages();
//       setImages(fetchedImages);
//     };

//     fetchImages();
//   }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
