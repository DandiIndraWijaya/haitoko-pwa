import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  categoryContainer: {
    textAlign: 'center',
    padding: 5,
    cursor: 'pointer',
  },
  categoryImage: {
    width: 90,
    height: 90,
    [theme.breakpoints.down('sm')]: {
      width: 70,
      height: 70,
    },
  },
  categoryName: {
    fontSize: 18,
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  addToFavoriteBtn: {
    backgroundColor: theme.palette.primary.main,
    textTransform: 'none',
    color: '#ffff',
    marginTop: 30,
    marginBottom: 30,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#ffff',
    },
  },
}));

const ProductCategories = ({ categoriesMerchant }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Kategori Produk</Typography>
      <Box>
        <Grid container spacing={1}>
          {
           categoriesMerchant?.response.map((category, key) => (
             <Grid key={key} item xs={4}>
               <Link href={`produk/${category.kategori.toLocaleLowerCase()}`} as={`produk/${category.kategori.toLocaleLowerCase()}`}>
                 <Box className={classes.categoryContainer}>
                   <img src={category.gambar} alt="" className={classes.categoryImage} />
                   <Typography className={classes.categoryName}>{category.kategori}</Typography>
                 </Box>
               </Link>
             </Grid>
           ))
         }
        </Grid>
      </Box>
      <center>
        <Button variant="contained" className={classes.addToFavoriteBtn}>Tambah ke Favorite</Button>
      </center>
    </Box>
  );
};

export default ProductCategories;
