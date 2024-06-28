import React from "react";
import Gallery from "@/components/gallery/Gallery";

export default function categoryPhotos(params ) {
  // console.log(params);
  return (
    <>
      <Gallery params={params} />
    </>
  );
}

export async function getServerSideProps({params} ) {
  // console.log(params);
    // Приклад: отримання значення orderBy з параметрів або з інших джерел
    // const orderBy = params.orderBy || "default"; // Замість "default" можна використати інше значення за замовчуванням
  
    // Передайте orderBy як пропс до компонента
    return {
      props: {
        params,
      },
    };
  }