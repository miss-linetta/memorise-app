import { Grow, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import Posts from '../Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import * as styles from './styles';
import Search from './components/Search/Search';

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
        sx={styles.gridContainer}
      >
        <Grid item xs={12} sm={6} md={9}>
          <Posts setPostId={setPostId} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Search />
          <Form postId={postId} setPostId={setPostId} />
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Home;
