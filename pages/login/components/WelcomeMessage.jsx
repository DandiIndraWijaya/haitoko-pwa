import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: 50,
    width: 150,
    height: 150,
    borderRadius: '100%',
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
    color: theme.palette.text.secondary,
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
        <img className={classes.image} alt="Logo" src="https://picsum.photos/150" />
      </center>
      <Typography className={classes.welcomeDriver}>Hai, Driver!</Typography>
      <Typography className={classes.welcomeSub}>Selamat datang di aplikasi HaiToko</Typography>
    </Box>
  );
};

export default Component;
