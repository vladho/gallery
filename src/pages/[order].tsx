import React from 'react';
import Gallery from '../components/gallery/Gallery'
import { PanoramaFishEyeSharp } from '@mui/icons-material';

// const params = ["popular","oldest", "latest","views","downloads"]

export default function Page({ params = {} }: { params?: { orderBy?: string, slug?: string } }) {
    const { orderBy = "popular", slug = "" } = params;
    
    return (
        <>
            <Gallery params={{ orderBy, slug }}/>
        </>
    );
}

