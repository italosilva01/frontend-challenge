import React, { useMemo, useState } from 'react';
import { Product, TabType } from '../../../@types/types';
import { GetServerSideProps } from 'next';
import { grapQLClient } from '../../../services/graphiqlClient';
import { gql } from 'graphql-request';
import { convertPrice } from '../../../utils';
import { useShoppingCar } from '../../../hooks/shoppingCar';
import { BackButton } from '../components/BackButton';
import { Box, Typography } from '@mui/material';
import { convertCurrencyBRL } from '../../../utils/convertCurrencyBRL';
import Image from 'next/image';
import { ButtonAddCard } from '../components/ButtonAddCar';
import { InforProduct } from '../components/InfoProduct';


interface ProductProps {
    product: Product;
}

interface ResponseProps {
    data: ProductProps;
}

export const getServerSideProps: GetServerSideProps<{
    product: Product;
}> = async (context) => {
    const id = context.params?.id as string;
    const response: ProductProps = await grapQLClient.request(gql`
    query{
      Product(id:"${id}") {
        id
        name
        price_in_cents
        description
        image_url
        category
      }
    } 
    
    `);

    const product: Product = Object.values(response)[0];

    return { props: { product } };
};

export default function Page({ product }: ProductProps) {
    const numeroComPontoFinal = convertPrice(product.price_in_cents);

    const { addCar, removeCar, productsShoppingCar } = useShoppingCar();

    const inShoppingCar = useMemo(
        () => (productsShoppingCar.find((e) => e.id === product.id) ? true : false),
        [productsShoppingCar]
    );

    const returnCategoryProduct = (categoryProduct: TabType | undefined) => {
        if (categoryProduct === 'mugs') {
            return 'caneca';
        } else return 'Camiseta';
    };

    const handleAddProductShoppingcar = (product: Product) => {
        inShoppingCar ? removeCar(product.id) : addCar(product);
    };
    return (
        <>
            <main className="flex-col h-auto overflow-hidden">
                <BackButton />
                <Box className="flex gap-8 h-full">
                    <Box>
                        <Image src={product.image_url} alt={product.name} width={640} height={560} />
                    </Box>

                    <Box>
                        <Box className="text-[#737380]">
                            <Typography variant="body1">
                                {returnCategoryProduct(product.category)}
                            </Typography>
                            <Typography variant="h4" className="">
                                {product.name}
                            </Typography>
                        </Box>
                        <Typography variant="h5">
                            <p className="font-bold ">
                                {convertCurrencyBRL(Number(numeroComPontoFinal))}
                            </p>
                        </Typography>

                        <Typography className="text-[#737380] mb-6" variant="body2">
                            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
                            R$900,00.
                        </Typography>
                        <Box className="h-[416px]  px-2  flex flex-col justify-between ">
                            <InforProduct product={product} />
                            <ButtonAddCard
                                productAddedCar={inShoppingCar}
                                handleFunction={() => handleAddProductShoppingcar(product)}
                            />
                        </Box>
                    </Box>
                </Box>
            </main>
        </>
    );
}
