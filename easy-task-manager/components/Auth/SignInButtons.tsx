import React from 'react';
import { signIn } from 'next-auth/react';
import { Button} from '@mui/material';
import { GitHub, Google, Apple, Facebook } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// create styled github button  component
const StyledGitHubButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#24292e',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#24292e',
        color: '#fff',
    },
    '&:active': {
        backgroundColor: '#24292e',
        color: '#fff',
    },
    '&:focus': {
        backgroundColor: '#24292e',
        color: '#fff',
    },
    '&:disabled': {
        backgroundColor: '#24292e',
        color: '#fff',
    },
    variant: 'outlined',
    startIcon: <GitHub />,
    margin: theme.spacing(1),
}));

interface SignInButtonsProps {
    handleSignIn: (provider: string) => void;
  }
const SignInButtons = ({handleSignIn}: SignInButtonsProps) => {

  return (
    <div>
      <StyledGitHubButton onClick={() => handleSignIn('google')}>
        Sign in with Google
      </StyledGitHubButton>
      <button onClick={() => handleSignIn('github')}>
        Sign in with GitHub
      </button>
      <button onClick={() => handleSignIn('apple')}>
        Sign in with Apple
      </button>
      <button onClick={() => handleSignIn('facebook')}>
        Sign in with Facebook
      </button>
    </div>
  );
  
};

export default SignInButtons;
