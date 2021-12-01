/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Box, Button, FormHelperText, IconButton, InputAdornment, OutlinedInput, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Phone } from '@material-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GoogleSignIn from './GoogleLogin';

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginTop: 35,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 35,
  },
  buttonSubmit: {
    marginTop: 20,
    borderRadius: 100,
    background: theme.palette.primary.main,
    color: theme.palette.text.white,
    width: '90%',
    padding: 10,
    fontWeight: '600',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  buttonCS: {
    marginTop: 10,
    width: '90%',
    padding: 10,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  link: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  boxLink: {
    width: '90%',
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  inputField: {
    width: '90%',
    marginTop: 10,
    borderRadius: 100,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  textError: {
    color: theme.palette.primary.main,
  },
  boxError: {
    width: '90%',
    textAlign: 'left',
    paddingTop: 1,
    paddingBottom: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  circularProgress: {
    color: '#ffff',
    fontSize: 10,
  },
  textGrey: {
    color: theme.palette.grey[600],
    fontSize: 14,
    fontWeight: '600',
  },
  textGreyAkun: {
    color: theme.palette.grey[500],
    fontSize: 14,
    fontWeight: '600',
  },
}));

const Component = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    // stop submit
    e.preventDefault();
    setLoading(true);
    if (typeof window !== 'undefined') {
      const userData = JSON.stringify({
        email: 'yakhida@gmail.com',
        uid: 'WBHWUpDIJdokhqzW6pFJXvBXM0OKjo',
      });
      localStorage.setItem('user', userData);
      setLoading(false);
      router.push('/');
    }
  };

  return (
    <Box className={classes.formInput}>
      {/* {
        error.status
        && (
        <Box className={classes.boxError}>
          <FormHelperText className={classes.textError}>{error.message}</FormHelperText>
        </Box>
        )
      } */}
      <form onSubmit={onSubmit}>
        <center>
          <OutlinedInput
            type="number"
            required
            name="name"
            className={classes.inputField}
            placeholder="Nomor HP Anda"
            // onChange={() => onChangeForm()}
            startAdornment={(
              <InputAdornment position="start" className={classes.icon}>
                <Phone />
              </InputAdornment>
          )}
          />
        </center>
        <center>
          <Button type="submit" variant="contained" className={classes.buttonSubmit}>
            {
              loading
                ? <CircularProgress fontSize="small" className={classes.circularProgress} size={24} />
                : 'Masuk'
            }
          </Button>
        </center>
        <Box style={{ margin: 30 }}>
          <center>
            <Typography className={classes.textGrey}>
              Atau Login Melalui
            </Typography>
          </center>
        </Box>
        <center>
          <GoogleSignIn />
        </center>
        <center>
          <Box className={classes.boxLink} style={{ marginTop: 5 }}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography className={classes.textGreyAkun}>Belum punya akun?</Typography>
              <Box>
                <Link href="/daftar-driver"><Typography className={classes.link} style={{ marginLeft: 10 }}>Daftar disini</Typography></Link>
              </Box>
            </Box>
          </Box>
        </center>
      </form>
    </Box>
  );
};

export default Component;
