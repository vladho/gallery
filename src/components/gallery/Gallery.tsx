// MainGallery.tsx
import React, { useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';
import {getImages} from "../../services/api.js";

// Інтерфейс для об'єкта зображення
interface ImageItem {
  id: number;
  title: string;
  url: string;
}

// Припустимо, що у нас є масив зображень
const images: ImageItem[] = [
  { id: 1, title: "Зображення 1", url: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Зображення 2", url: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Зображення 3", url: "https://via.placeholder.com/300x200" },
  // Додайте більше зображень за потреби
];

const Gallery: React.FC = () => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     useDispatch(addImage(images));
    //   }, [dispatch]);

    useEffect(() => {
        console.log("first")
        const images = getImages()
      }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {images.map((image) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 200, objectFit: 'cover' }}
                image={image.url}
                alt={image.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {image.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;