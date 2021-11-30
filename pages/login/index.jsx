import React, { useEffect, useState } from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import Layout from '@components/layout';
import { makeStyles } from '@material-ui/styles';
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';

const style = makeStyles((theme) => ({
  bottomGap: {
    paddingBottom: 25,
    height: '100vh',
  },
}));

const Login = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [driverStatus, setDriverStatus] = useState(null);
  const [error, setError] = useState({
    error: false,
    message: '',
  });
  const router = useRouter();
  const classes = style();

  const onSubmitLogin = (payload) => {
    // if (payload.username === '' || payload.password === '') {
    //   setError({ ...error, status: true, message: 'Form must be filled' });
    //   return;
    // }
    // submitLogin(payload, async (res) => {
    //   if (!res.error) {
    //     await setIsLogin(true);
    //     router.push('/');
    //   } else {
    //     setError({
    //       status: true,
    //       message: res.message,
    //     });
    //   }
    // });
  };

  const onChangeForm = () => {
    setError({ ...error, status: false });
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Layout>
      <Container className={classes.bottomGap}>
        <WelcomeMessage />
        <LoginForm onChangeForm={onChangeForm} onSubmitLogin={onSubmitLogin} error={error} />
      </Container>
    </Layout>
  );
};

export default Login;
