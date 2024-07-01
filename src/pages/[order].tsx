import React from 'react';
import { GetServerSideProps } from 'next';
import Gallery from '../components/gallery/Gallery';
import NotFound from './404';

interface PageProps {
  isValidOrder: boolean;
}

export default function Page({ isValidOrder }: PageProps) {
  if (!isValidOrder) {
    return <NotFound />;
  }

  return (
    <>
      <Gallery />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { order } = context.params as { order: string };
  const validOrders = ["popular", "oldest", "latest", "downloads"];

  const isValidOrder = validOrders.includes(order);

  return {
    props: {
      isValidOrder,
    },
  };
};