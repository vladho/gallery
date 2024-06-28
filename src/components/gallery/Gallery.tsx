// Gallery.tsx
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { getTopics, getImages, getTopicsPhotos } from '../../services/api';
import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';
import {getImagesSelector} from "../../redux/gallery/gallerySelector"
import { ImageItem } from './types';
import   { useRouter } from 'next/router';
import ModalComponent from '../modal/ModalComponent';


type GalleryType = {orderBy: string};


const Gallery: React.FC<GalleryType> = ({orderBy}) => {

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
const router = useRouter();
const pathName = router.pathname;

  const getAllImages = useSelector(getImagesSelector);

  useEffect(() => {
    const fetchImages = async () => {
        const fetchedImages = await getImages({orderBy})
        dispatch(addImage(fetchedImages))
      }

      
      fetchImages();
    }, [dispatch, pathName,orderBy]);
    
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
            {/* <Box onClick={()=>handleOpen()}> */}
            <ImageCard image={image} />
            {/* </Box> */}
          </Grid>
        ))}
      </Grid>
      <ModalComponent open={open} handleClose={handleClose} photo={selectedPhoto} />
    </Container>
  );
};

export default Gallery;
