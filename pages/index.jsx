import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Layout from '@components/Layout';
import NavbarBack from '@components/Navbar/NavbarBack';
import Highlight from './merchant/[id]/components/Highlight';

const useStyles = makeStyles((theme) => ({

}));

const MerchantDetail = () => {
  const classes = useStyles();

  return (
    <Layout>
      <NavbarBack currentPage="Detail Toko" />
      <Container>
        <Highlight />
      </Container>
    </Layout>
  );
};

export default MerchantDetail;
