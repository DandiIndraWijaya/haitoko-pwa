import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import { Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NavbarBack from '@components/Navbar/NavbarBack';
import { useRouter } from 'next/router';
import categoriesMerchant from '@pages/api/categoriesMerchant';
import getProducts from '@pages/api/product/[category]';
import products from '@pages/api/products';
import SearchProduct from './components/SearchProduct';
import ProductList from './components/ProductList';

const useStyles = makeStyles((theme) => ({

}));

const ProductByCategory = ({ products }) => {
  const classes = useStyles();
  const router = useRouter();
  const { kategori } = router.query;
  return (
    <Layout>
      <NavbarBack currentPage={kategori.charAt(0).toUpperCase() + kategori.slice(1)} />
      <Container>
        <SearchProduct />
        <ProductList products={products} />
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  // const resCategoriesMerchant = await fetch('http://localhost:3000/api/categoriesMerchant');
  // const categoriesMerchant = await resCategoriesMerchant.json();

  const paths = categoriesMerchant.response.map((category) => `/produk/${category.kategori.toLowerCase()}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const res = await fetch(`http://localhost:3000/api/product/${params.kategori}`);
  // const products = await res.json();
  const products = getProducts(params.kategori);
  return {
    props: {
      products,
    },
  };
}

export default ProductByCategory;
