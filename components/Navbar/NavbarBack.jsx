import React from 'react';
import { Box, Typography, Grid, Button, IconButton, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.text.white,
    color: '#000',
    paddingTop: 10,
    paddingBottom: 10,
  },
  arrowIcon: {
    color: theme.palette.primary.main,
  },
  page: {
    fontSize: 18,
    fontWeight: '600',
  },
}));

const NavbarBack = (props) => {
  const { currentPage } = props;
  const router = useRouter();
  const classes = useStyles();

  const onClickBack = () => {
    router.back();
  };

  return (
    <AppBar elevation={1} position="sticky" className={classes.appBar}>
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <IconButton size="small" onClick={onClickBack}>
            <ArrowBack className={classes.arrowIcon} fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.page}>{currentPage}</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavbarBack;
