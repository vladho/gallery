// Gallery.tsx
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { getImages } from '../../services/api';
import { ImageItem } from './types';
import ImageCard from './ImageCard';
import { useDispatch } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';

type OrderByType = {orderBy: string};


const Gallery: React.FC<OrderByType> = (orderBy) => {

  const [images, setImages] = useState<ImageItem[]>([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImages(orderBy);
      console.log(fetchedImages)
      dispatch(addImage(fetchedImages))
    };

    fetchImages();
  }, []);

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
