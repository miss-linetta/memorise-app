import { Grow, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Posts from '../Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {
  const [postId, setPostId] = useState(null);
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
      >
        <Grid item xs={12} sm={7}>
          <Posts setPostId={setPostId} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form postId={postId} setPostId={setPostId} />
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Home;
