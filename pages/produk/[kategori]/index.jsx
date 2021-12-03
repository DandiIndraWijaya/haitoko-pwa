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

const ProductByCategory = () => {
  const classes = useStyles();
  const router = useRouter();
  const { kategori } = router.query;

  useEffect(() => {
    const kategoriArray = [];
    kategoriArray.push(kategori);
    axios.post(
      'http://panel.haitoko.xyz/api/product/list_product_merchant_v2',
      {
        merchant: 'GIpd2vlG3Aue5v48BCtHqBODvBT7cv',
        keyword: '',
        kategori: kategoriArray,
        sort: '',
        start: 0,
        count: 100,
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Client-Service': 'gmedia-client',
          'Auth-Key': 'tokotap-client',
          'User-id': 'N3L5FOpo1KfxU2fVC6hAIhJvUjc2',
          Token: 'WyVFmgndhPCSk++RIKffDsz/TLL1cMH/NiD3jVscJ9Y=',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
      .then((res) => {
        console.log('RES : ', res);
      })
      .catch((error) => {
        console.log('ERROR : ', error);
      });
  }, []);

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

export default ProductByCategory;
