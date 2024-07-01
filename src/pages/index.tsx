import React from "react";
import Gallery from "../components/gallery/Gallery";

function MyApp() {
    const params={orderBy: 'popular', slug :""}

  return (
    <>
      <Gallery params={params}/>
    </>
  );
}

export default MyApp;
