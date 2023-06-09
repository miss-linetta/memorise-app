import React, { useContext, useState } from 'react';
import * as styles from './styles';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import Input from './component/Input';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res: any) => {
    const decoded: { name: string; picture: string; sub: string; jti: string } =
      jwtDecode(res.credential);

    const { name, picture, sub, jti } = decoded;

    const result = decoded;
    const token = decoded.jti;

    console.log(token);

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    console.log('Error');
  };

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Container>
      <Paper sx={styles.paper} elevation={3}>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <Box sx={styles.form}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                    type="text"
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                    type="text"
                  />
                </>
              )}

              <Input
                name="email"
                label="Email"
                handleChange={handleChange}
                autoFocus
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type="password"
              />

              {isSignup && (
                <Input
                  name="repeatPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={styles.submit}
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <Box sx={styles.google}>
              <GoogleLogin onSuccess={googleSuccess} onError={googleError} />
            </Box>
            <Grid container>
              <Grid item>
                <Button sx={styles.lastButton} onClick={handleSwitch}>
                  {isSignup
                    ? 'Already have an Account? Sign In'
                    : 'Donʼt have an account? Sign Up'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
