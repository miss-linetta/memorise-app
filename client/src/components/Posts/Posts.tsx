import React from 'react';
import Post from './components/Post';
import * as styles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';

const Posts = ({ postId, setPostId }: any) => {
  const posts = useSelector((state: any) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid sx={styles.container} container alignItems="stretch" spacing={3}>
      {posts.map((el: any) => (
        <Grid item key={el._id} xs={12} sm={6} md={6}>
          <Post post={el} setPostId={setPostId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
