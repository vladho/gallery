import React from "react";
import Gallery from "@/components/gallery/Gallery";

export default function ({ orderBy }) {
  return (
    <>
      <Gallery orderBy={orderBy} />
    </>
  );
}

// export async function getServerSideProps({ params }) {
//     // Приклад: отримання значення orderBy з параметрів або з інших джерел
//     const orderBy = params.orderBy || "default"; // Замість "default" можна використати інше значення за замовчуванням
  
//     // Передайте orderBy як пропс до компонента
//     return {
//       props: {
//         orderBy,
//       },
//     };
//   }