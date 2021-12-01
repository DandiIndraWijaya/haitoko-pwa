import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Layout from '@components/Layout';

const useStyles = makeStyles((theme) => ({

}));

const MerchantDetail = () => {
  const classes = useStyles();

  return (
    <Layout>
      <center>
        <h3>Merchant Detail Page</h3>
      </center>
    </Layout>
  );
};

export default MerchantDetail;
