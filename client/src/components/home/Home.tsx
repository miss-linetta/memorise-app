import { Grow, Grid, Typography, Box, Paper, Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Posts from '../Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import * as styles from './styles';
import Search from './components/Search/Search';
import { Link } from 'react-router-dom';

const Home = () => {
  const [postId, setPostId] = useState(null);
  const user = localStorage.getItem('profile');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [postId, dispatch]);

  return (
    <Grow in>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        sx={styles.gridContainer}
      >
        <Grid item xs={12} sm={6} md={9}>
          <Posts setPostId={setPostId} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Search />

          {user ? (
            <Form postId={postId} setPostId={setPostId} />
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              sx={styles.paper}
            >
              Sign Up or Sign In to create post
            </Button>
          )}
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Home;
