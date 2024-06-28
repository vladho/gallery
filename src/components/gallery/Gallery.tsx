// Gallery.tsx
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { getTopics, getImages, getTopicsPhotos } from '../../services/api';
import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';
import {getImagesSelector} from "../../redux/gallery/gallerySelector"
import { ImageItem } from './types';
import   { useRouter } from 'next/router';


type GalleryType = {orderBy: string};


const Gallery: React.FC<GalleryType> = ({orderBy}) => {

  const [images, setImages] = useState<ImageItem[]>([]);

  const dispatch = useDispatch();
const router = useRouter();
const pathName = router.pathname;
console.log(pathName);
console.log(router);

const slug = router.query.slug

  const getAllImages = useSelector(getImagesSelector);
  // console.log(getAllImages)
  // console.log(router.query.slug);


  useEffect(() => {
    const fetchImages = async () => {
//  if (pathName === "/[order]/[slug]") {
//   console.log(true);
//   const fetchedImages = await getTopicsPhotos({orderBy, slug})
//   dispatch(addImage(fetchedImages))
//  } else 
//       {
        const fetchedImages = await getImages({orderBy})
        dispatch(addImage(fetchedImages))
      }
      // const test = await getTopics();
    // };

    fetchImages();
  }, [dispatch, pathName,orderBy]);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {getAllImages.map((image: ImageItem) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
