import { TextField, IconButton } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';
import { useProduct } from '../../context/ProductContext';

const Search = z.object({
  search: z.string(),
});

export const SearchItem = () => {
  type TypeSearch = z.infer<typeof Search>;
  const { register, handleSubmit } = useForm<TypeSearch>();
  const { addProducts } = useProduct();

  const handleSearch: SubmitHandler<TypeSearch> = async (data) => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(filter: { q:"${data.search}" }) {
          id
          name
          image_url
          price_in_cents
        }
      }
    `);

    addProducts(allProducts);
  };

  return (
    <form
      className="flex justify-items-center"
      onSubmit={handleSubmit(handleSearch)}
    >
      <TextField
        placeholder="Procurando por algo especifico?"
        className=" !focus:outline-none !hover:outline-none text-stone-500  w-96 max-w-96  bg-[#F3F5F6] "
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <Image src={'/images/Group.svg'} width={24} height={24} />
            </IconButton>
          ),
        }}
        {...register('search')}
      />
    </form>
  );
};
