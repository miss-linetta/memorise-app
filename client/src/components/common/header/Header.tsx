import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import memory from '../../../assets/memory-icon.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile') || '{}')
  );
  const styles = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    navigate('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile') || '{}'));
  }, [location]);

  return (
    <AppBar className={styles.appBar} position="static" color="inherit">
      <div className={styles.brandContainer}>
        <Typography component={Link} to="/" variant="h2" align="center">
          Memory
        </Typography>
        <img className={styles.image} src={memory} alt="memeory" height="60" />
      </div>
      <Toolbar className={styles.toolbar}>
        {user?.result ? (
          <div className={styles.profile}>
            <Avatar
              className={styles.purple}
              alt={user.result.given_name}
              src={user.result.picture}
            >
              {user?.result?.given_name?.charAt(0)}
            </Avatar>
            <Typography className={styles.userName} variant="h6">
              {user.result.given_name}
            </Typography>
            <Button
              variant="contained"
              className={styles.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
