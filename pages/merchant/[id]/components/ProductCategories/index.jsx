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

const ProductCategories = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([
    {
      id: '1',
      kategori: 'Makanan',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034534000000-160.png',
    },
    {
      id: '2',
      kategori: 'Minuman',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034555000000-814.png',
    },
    {
      id: '4',
      kategori: 'Snack ',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034607000000-216.png',
    },
    {
      id: '5',
      kategori: 'Kebutuhan Dapur',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034652000000-462.png',
    },
    {
      id: '11',
      kategori: 'Kebutuhan Anak',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034721000000-758.png',
    },
    {
      id: '17',
      kategori: 'Perawatan & Kesehatan',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034800000000-96.png',
    },
    {
      id: '18',
      kategori: 'Makanan Beku',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034832000000-685.png',
    },
    {
      id: '20',
      kategori: 'Lain-lain',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110034903000000-6.png',
    },
    {
      id: '24',
      kategori: 'Paket  Promo',
      gambar: 'https://haitoko-dev.s3.ap-southeast-1.amazonaws.com/kategori/kategori20211110035407000000-262.png',
    },
  ]);

  useEffect(() => {
    axios.post('https://panel.haitoko.com/api/product/kategori_merchant', {}, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Client-Service': 'gmedia-client',
        'Auth-Key': 'tokotap-client',
        'User-id': 'N3L5FOpo1KfxU2fVC6hAIhJvUjc2',
        Token: 'WyVFmgndhPCSk++RIKffDsz/TLL1cMH/NiD3jVscJ9Y=',
      },
    })
      .then((res) => {
        console.log('RES : ', res);
      })
      .catch((error) => {
        console.log('ERROR : ', error);
      });
  }, []);
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Kategori Produk</Typography>
      <Box>
        <Grid container spacing={1}>
          {
           categories.map((category, key) => (
             <Grid key={key} item xs={4}>
               <Link href={`produk/${category.kategori.toLocaleLowerCase()}`}>
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
