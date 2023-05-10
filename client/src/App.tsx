import React, { useEffect, useState } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memory from './assets/memory-icon.png';
import Form from './components/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { getPosts } from './actions/posts';

const App = () => {
  const [postId, setPostId] = useState(null);
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [postId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={styles.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memory
        </Typography>
        <img className={styles.image} src={memory} alt="memeory" height="60" />
      </AppBar>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setPostId={setPostId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form postId={postId} setPostId={setPostId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
