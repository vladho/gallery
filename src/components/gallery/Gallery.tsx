import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button } from '@mui/material';
import { getImages } from '../../services/api';
import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';
import { getImagesSelector } from "../../redux/gallery/gallerySelector"
import { ImageItem } from './types';
import { useRouter } from 'next/router';
import ModalComponent from '../modal/ModalComponent';

type GalleryType = { orderBy: string };

const Gallery: React.FC<GalleryType> = ({ orderBy }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = router.pathname;

  const getAllImages = useSelector(getImagesSelector);

  useEffect(() => {

    setPage(1);
    setHasMore(true);
    fetchImages();
  }, [dispatch, pathName, orderBy]);

  const fetchImages = async () => {
    try {
      const fetchedData = await getImages({ orderBy, page });
      if (fetchedData.images.length === 0) {
        setHasMore(false);
      } else {
        dispatch(addImage(fetchedData.images));
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error("Помилка завантаження зображень", error);
      setHasMore(false);
    }
  };

  const handleOpen = (photo: string) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {getAllImages.map((image: ImageItem) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <Box onClick={() => handleOpen(image.urls.full)}>
              <ImageCard image={image} />
            </Box>
          </Grid>
        ))}
      </Grid>
      {hasMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button onClick={fetchImages} variant="contained">
            Завантажити ще
          </Button>
        </Box>
      )}
      <ModalComponent open={open} handleClose={handleClose} photo={selectedPhoto} />
    </Container>
  );
};

export default Gallery;