import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  card: {

  },
  productImage: {
    textAlign: 'center',
    width: '100%',
    borderRadius: 20,
  },
  productName: {
    fontSize: 16,
    marginTop: 7,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  productPrice: {
    color: theme.palette.primary.main,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  tambahBtn: {
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,
    marginTop: 10,
    color: '#ffff',
    borderRadius: 100,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#ffff',
    },
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const data = {
    name: 'PRONAS Paket Kornet & Bumbu kacang hijau dan moka',
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box className={classes.card}>
            <img src="https://picsum.photos/150" alt="" className={classes.productImage} />
            <Typography className={classes.productName}>
              {
                data.name.length > 25 ? data.name.slice(0, 25).concat('...') : data.name
              }
            </Typography>
            <Typography className={classes.productPrice}>Rp. {'2500'.toLocaleString('ID-id')}</Typography>
            <Button variant="contained" className={classes.tambahBtn}>Tambah</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.card}>
            <img src="https://picsum.photos/150" alt="" className={classes.productImage} />
            <Typography className={classes.productName}>
              {
                data.name.length > 25 ? data.name.slice(0, 25).concat('...') : data.name
              }
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box className={classes.card}>
            <img src="https://picsum.photos/150" alt="" className={classes.productImage} />
            <Typography className={classes.productName}>
              {
                data.name.length > 20 ? data.name.slice(0, 20).concat('...') : data.name
              }
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductList;
