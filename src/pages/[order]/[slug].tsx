import React from "react";
import Gallery from "@/components/gallery/Gallery";

export default function categoryPhotos({ params = {} }: { params?: { orderBy?: string, slug?: string } }) {
  console.log(params);
  
  const { orderBy = "popular", slug = "" } = params;

  return (
      <>
          <Gallery params={{ orderBy, slug }} />
      </>
  );
}

// export async function getServerSideProps({params} ) {

//     return {
//       props: {
//         params,
//       },
//     };
//   }