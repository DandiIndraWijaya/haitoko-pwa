import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { SentimentDissatisfied } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  card: {
    height: 230,
    position: 'relative',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      height: 210,
    },
  },
  productImage: {
    textAlign: 'center',
    width: '100%',
    borderRadius: 20,
    height: 100,
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: theme.palette.grey[300],
    [theme.breakpoints.down('sm')]: {
      height: 90,
    }
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
    position: 'absolute',
    bottom: 40,
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
    position: 'absolute',
    bottom: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#ffff',
    },
  },
  emptyIcon: {
    color: theme.palette.grey[500],
    fontSize: 100,
  },
  emptyProduct: {
    textAlign: 'center',
    fontWeight: '600',
    color: theme.palette.grey[500],
  },
}));

const ProductList = ({ products }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        {
          products.length > 0
          && products.map((product, key) => (
            <Grid key={key} item xs={4}>
              <Box className={classes.card}>
                <img
                  src={product.image === '' ? 'https://png.pngtree.com/png-vector/20190216/ourmid/pngtree-vector-fast-food-icon-png-image_541850.jpg' : product.image}
                  alt=""
                  className={classes.productImage}
                />
                <Typography className={classes.productName}>
                  {
                product.nama_product.length > 25 ? product.nama_product.slice(0, 25).concat('...') : product.nama_product
              }
                </Typography>
                <Typography className={classes.productPrice}>{product.harga}</Typography>
                <Button variant="contained" className={classes.tambahBtn}>Tambah</Button>
              </Box>
            </Grid>
          ))
        }

      </Grid>
      {
         products.length < 1
         && (
         <center>
           <Box style={{ marginTop: 80 }}>
             <SentimentDissatisfied className={classes.emptyIcon} />
             <Typography className={classes.emptyProduct}>Produk Kosong</Typography>
           </Box>
         </center>
         )
        }
    </Box>
  );
};

export default ProductList;
