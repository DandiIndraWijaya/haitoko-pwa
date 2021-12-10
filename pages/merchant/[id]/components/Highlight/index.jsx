/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from 'react-responsive';
import { Favorite } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: '100%',
    marginTop: 15,
    objectFit: 'cover',
  },
  merchantName: {
    fontSize: 22,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  street: {
    fontSize: 18,
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  deliveryContainer: {
    borderRadius: 100,
    backgroundColor: '#FDD8DD',
    color: theme.palette.primary.main,
    textAlign: 'center',
    padding: 3,
    fontWeight: '600',
    cursor: 'pointer',
  },
  selectedDeliveryContainer: {
    borderRadius: 100,
    backgroundColor: theme.palette.primary.main,
    color: '#ffff',
    textAlign: 'center',
    padding: 3,
    fontWeight: '600',
    cursor: 'pointer',
  },
  favoriteIcon: {
    color: theme.palette.primary.main,
    fontSize: 20,
    marginLeft: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 10,
  },
  ratingContainer: {
    width: 70,
    border: '1px solid #EBEBEB',
    borderRadius: 100,
    paddingTop: 3,
    margin: 'auto',
    position: 'absolute',
    left: 11,
    bottom: -4,
    backgroundColor: '#ffff',
  },
}));

const Highlight = ({ merchantDetail }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: '(max-width: 789px)' });
  const [selectedDelivery, setSelectedDelivery] = useState(0);

  const ratingToko = () => {
    const { rating } = merchantDetail.response;
    return (((parseInt(rating.rate_barang) + parseInt(rating.rate_harga) + parseInt(rating.rate_pelayanan)) / 3).toFixed(1));
  };

  return (
    <Box className={classes.root}>
      <Grid container alignItems="center">
        <Grid item xs={isMobile ? 4 : 3}>
          <img
            src="https://picsum.photos/150"
            alt=""
            className={classes.image}
          />
          <Box style={{ position: 'relative' }}>
            <Box className={classes.ratingContainer}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Box>
                    <Favorite className={classes.favoriteIcon} />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.rating}>{ratingToko()}</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={isMobile ? 8 : 9}>
          <Box>
            <Typography className={classes.merchantName}>{merchantDetail?.response?.nama_merchant}</Typography>
            <Typography className={classes.street}>{merchantDetail?.response?.alamat_merchant}</Typography>
            <Box mt={1}>
              <Grid container spacing={1} alignItems="center">
                {
                merchantDetail?.response?.available.map((delivery, key) => (
                  <Grid item xs={4} key={key}>
                    <Box
                      className={selectedDelivery === key
                        ? classes.selectedDeliveryContainer : classes.deliveryContainer}
                      onClick={() => setSelectedDelivery(key)}
                    >
                      {delivery.label}
                    </Box>
                  </Grid>
                ))
              }
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Highlight;
