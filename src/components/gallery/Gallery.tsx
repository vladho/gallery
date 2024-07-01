import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addImage, setCurrentPage } from '@/redux/gallery/galleryReducer';
import { getImages, getSearchPhotos, getTopicsPhotos } from '../../services/api';
import ImageCard from './ImageCard';
import { getCurrentPageSelector, getImagesSelector } from "../../redux/gallery/gallerySelector"
import { ImageItem } from './types';
import { useRouter } from 'next/router';
import ModalComponent from '../modal/ModalComponent';
import { useSearchParams } from 'next/navigation';
import Pagination from './Pagination';

const Gallery: React.FC= () => {

  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();
  const currentPage = useSelector(getCurrentPageSelector);
  const getAllImages = useSelector(getImagesSelector);

  const searchParams = useSearchParams();
  
  const searchPage = router.query.search
  const order = router.query.order
  const slug = router.query.slug

  const page = parseInt(searchParams.get('page') || '1', 10);
  const searchResult = searchParams.get('search')


  useEffect(() => {
    dispatch(setCurrentPage(page))
    fetchImages(currentPage);
  }, [dispatch, order, slug,searchPage]);

  const fetchImages = async (page: number) => {
    try {
      if (searchPage) {
        const fetchedData = await getSearchPhotos(searchResult,currentPage);
        dispatch(addImage(fetchedData.images));
        setTotalPages(fetchedData.totalPages);
      } else
      if(slug) {
        const fetchedData = await getTopicsPhotos(order, slug,page)
        dispatch(addImage(fetchedData.images));
        setTotalPages(fetchedData.totalPages);
      } else {
        const fetchedData = await getImages(order, page);
        dispatch(addImage(fetchedData.images));
        setTotalPages(fetchedData.totalPages);
      }
      dispatch(setCurrentPage(page))
    
    } catch (error) {
      console.error("Помилка завантаження зображень", error);
    }
  };

  const handleOpen = (photo: string) => {
    setSelectedPhoto(photo);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchImages(page);
    }
  };

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
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Box>
      <ModalComponent open={open} handleClose={handleClose} photo={selectedPhoto} />
    </Container>
  );
};

export default Gallery;
