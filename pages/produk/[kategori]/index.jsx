import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NavbarBack from '@components/Navbar/NavbarBack';
import { useRouter } from 'next/router';
import axios from 'axios';
import SearchProduct from './components/SearchProduct';
import ProductList from './components/ProductList';

const useStyles = makeStyles((theme) => ({

}));

const ProductByCategory = ({ product }) => {
  const classes = useStyles();
  const router = useRouter();
  const { kategori } = router.query;
  console.log('PRODUCT : ', product);
  return (
    <Layout>
      <NavbarBack currentPage={kategori.charAt(0).toUpperCase() + kategori.slice(1)} />
      <Container>
        <SearchProduct />
        <ProductList />
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const resCategoriesMerchant = await fetch('http://localhost:3000/api/categoriesMerchant');
  const categoriesMerchant = await resCategoriesMerchant.json();

  const paths = categoriesMerchant.response.map((category) => `/produk/${category.kategori.toLowerCase()}`);
  console.log('PATHS : ', paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log('params: ', params);
  const res = await fetch(`http://localhost:3000/api/product/${params.kategori}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductByCategory;
