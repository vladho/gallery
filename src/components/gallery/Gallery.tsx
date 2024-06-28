import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button, ButtonGroup } from '@mui/material';
import { getImages } from '../../services/api';
import ImageCard from './ImageCard';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '@/redux/gallery/galleryReducer';
import { getImagesSelector } from "../../redux/gallery/gallerySelector"
import { ImageItem } from './types';
import { useRouter } from 'next/router';
import ModalComponent from '../modal/ModalComponent';
import { useSearchParams } from 'next/navigation';

type GalleryType = { orderBy: string };

const Gallery: React.FC<GalleryType> = (params) => {
  console.log(params);
  const { orderBy,slug } = params;
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();

    const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '9'
 

  const pathName = router.pathname;

  const getAllImages = useSelector(getImagesSelector);

  useEffect(() => {
    setCurrentPage(1);
    fetchImages(1);
  }, [dispatch, pathName, orderBy]);

  const fetchImages = async (page: number) => {
    try {
      const fetchedData = await getImages({ orderBy, page });
      dispatch(addImage(fetchedData.images));
      setTotalPages(fetchedData.totalPages);
      setCurrentPage(page);
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

  const renderPaginationButtons = () => {
    let buttons = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          variant={i === currentPage ? "contained" : "outlined"}
        >
          {i}
        </Button>
      );
    }

    return buttons;
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
        {/* <ButtonGroup>
          <Button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Назад
          </Button>
          {renderPaginationButtons()}
          <Button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Вперед
          </Button>
        </ButtonGroup> */}
      </Box>
      <ModalComponent open={open} handleClose={handleClose} photo={selectedPhoto} />
    </Container>
  );
};

export default Gallery;