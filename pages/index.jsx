import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Layout from '@components/Layout';
import NavbarBack from '@components/Navbar/NavbarBack';
import Highlight from './merchant/[id]/components/Highlight';
import ProductCategories from './merchant/[id]/components/ProductCategories';

const useStyles = makeStyles((theme) => ({

}));

const MerchantDetail = ({ merchantDetail, categoriesMerchant }) => {
  const classes = useStyles();

  return (
    <Layout>
      <NavbarBack currentPage="Detail Toko" />
      <Container>
        <Highlight merchantDetail={merchantDetail} />
        <ProductCategories categoriesMerchant={categoriesMerchant} />
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const resMerchantDetail = await fetch('https://zealous-newton-f7b790.netlify.app/api/merchantDetail');
  const merchantDetail = await resMerchantDetail.json();

  const resCategoriesMerchant = await fetch('https://zealous-newton-f7b790.netlify.app/api/categoriesMerchant');
  const categoriesMerchant = await resCategoriesMerchant.json();

  return {
    props: {
      merchantDetail,
      categoriesMerchant,
    },
  };
}

export default MerchantDetail;
