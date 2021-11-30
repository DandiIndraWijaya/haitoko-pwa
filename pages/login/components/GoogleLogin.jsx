// Component Name : FD-004
// This handle register dialog with google

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, CircularProgress } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

// make style
const useStyle = makeStyles((theme) => ({
  btnGoogle: {
    borderRadius: 100,
    width: '90%',
    fontSize: '14px',
    fontWeight: '600',
    background: '#FFFFFF',
    textTransform: 'none',
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 5, 1),
    '&:hover': {
      backgroundColor: '#ffff',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  ic_LoginSosmed: {
    width: '25px',
  },
  loadingCircular: {
    color: '#32D320',
  },
}));

const GoogleSignIn = (props) => {
  // load style
  const classes = useStyle();

  const [loading, setLoading] = useState(false);

  // handle submit
  const onSubmit = (res) => {
    if (loading) {
      return;
    }
    setLoading(true);

    const {
      displayName,
      uid,
      email,
      imageUrl } = res.profileObj;

    console.log('RES : ', res.profileObj);
    setLoading(false);

    // axios.post('https://panel.haitoko.com/api/authentication/login_via_google', {
    //   email,
    //   nama: displayName,
    //   uid,
    // })
    //   .then((response) => {
    //     if (response.metadata.status === 200) {
    //       const data = response.response;
    //       data.flag = 'google';
    //       if (typeof window !== 'undefined') {
    //         localStorage.setItem('user', data);
    //       }
    //       console.log('respon', data);
    //     } else {
    //       console.log(`Error code ${res.metadata.status}`, res.metadata.message);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(`err ${error}`);
    //   });
  };

  return (
    <GoogleLogin
      clientId={process.env.googleKey}
      render={(renderProps) => (
        <Button
          variant="contained"
          fullWidth
          onClick={renderProps.onClick}
          className={classes.btnGoogle}
        >
          {loading
            ? <CircularProgress className={classes.loadingCircular} size={25} />
            : (
              <>
                <img
                  src="/assets/ic_google_mini.png"
                  alt="google minit"
                  className={classes.ic_LoginSosmed}
                />
                &nbsp;
                Google
              </>
            )}
        </Button>
      )}
      onSuccess={(res) => onSubmit(res)}
      onFailure={(fail) => console.log('FAIL : ', fail)}
      cookiePolicy="single_host_origin"
    />
  );
};

// map local variable to reducer
// const mapStoreToProps = (state) => ({
//   auth: state.auth,
// });

// // map dispatch to reducer
// const mapDispatchToProps = (dispatch) => ({
//   submitRegisterGoogle: (data, callback) => dispatch(submitRegisterGoogle(data, callback)),
// });

export default GoogleSignIn;
