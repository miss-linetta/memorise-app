import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import * as styles from './styles';
import memory from '../../../assets/memory-icon.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile') || '{}')
  );
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
    <AppBar sx={styles.appBar} position="static" color="inherit">
      <Box sx={styles.brandContainer}>
        <Typography component={Link} to="/" variant="h2" align="center">
          Memory
        </Typography>
        <Box
          component="img"
          sx={styles.image}
          src={memory}
          alt="memeory"
          height="60"
        />
      </Box>
      <Toolbar sx={styles.toolbar}>
        {user?.result ? (
          <Box sx={styles.profile}>
            <Avatar
              sx={styles.purple}
              alt={user.result.given_name}
              src={user.result.picture}
            >
              {user?.result?.given_name?.charAt(0)}
            </Avatar>
            <Typography sx={styles.userName} variant="h6">
              {user.result.given_name}
            </Typography>
            <Button
              variant="contained"
              sx={styles.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            sx={styles.button}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
