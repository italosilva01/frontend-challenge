import { useRouter } from 'next/router';
import React from 'react';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';
import { Product } from '../../@types/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context: {
  params: { id: string };
}) => {
  const { id } = context.params;

  const response = await grapQLClient.request(gql`
    query{
      Product(id:"${id}") {
        id
        name
        price_in_cents
        description
      }
    } 
    
    `);

  const product: Product = await response.json();

  return { props: { product } };
}) satisfies GetServerSideProps<{ product: Product }>;

export default function Page({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <p>Post</p>;<p>{product.name}</p>
    </>
  );
}
