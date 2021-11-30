import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: 50,
  },
  welcomeDriver: {
    marginTop: 30,
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },
  welcomeSub: {
    textAlign: 'center',
    fontSize: 22,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
}));

const Component = () => {
  const classes = useStyles();

  return (
    <Box>
      <center>
        <img className={classes.image} alt="Logo" src="/assets/login-illustration.png" />
      </center>
      <Typography className={classes.welcomeDriver}>Hai, Fren!</Typography>
      <Typography className={classes.welcomeSub}>Selamat datang di aplikasi HaiToko</Typography>
    </Box>
  );
};

export default Component;
