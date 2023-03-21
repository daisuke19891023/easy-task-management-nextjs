import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { signIn } from 'next-auth/react';
import SignInButtons from '../components/Auth/SignInButtons';

// create styled Container  component
const StyledContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(3),
}));
// create styled Typography component for title
const StyledTitleTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    variant: 'h4',
}));

// create styled Box component for signInButtons
const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
}));


const LoginPage: NextPage = () => {

    const handleSignIn = async (provider: string) => {
        await signIn(provider);
      };

  return (
    <>
      <Head>
        <title>Login | My Task Manager App</title>
      </Head>
      <StyledContainer>
        <StyledTitleTypography>
          Welcome to My Task Manager App
        </StyledTitleTypography>
        <Typography>
          Simplify your project management with an easy-to-use task board.
          Sign in to get started.
        </Typography>
        <StyledBox>
          <SignInButtons handleSignIn={handleSignIn} />
        </StyledBox>
      </StyledContainer>
    </>
  );
};

export default LoginPage;
