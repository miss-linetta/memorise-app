import {
  Paper,
  Typography,
  Divider,
  Box,
  CircularProgress,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './styles';
import { getPost } from '../../actions/posts';

const PostDetails = (post: any) => {
  const [isLoading, setIsLoading] = useState(true);
  //   const { post, posts } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(post);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        await dispatch(getPost(id));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!post) {
    return <Typography variant="h6">Post not found</Typography>;
  }

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <Box component="div" sx={styles.card}>
        <Box component="div" sx={styles.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag: any) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: '20px 0' }} />
        </Box>
        <Box component="div" sx={styles.imageSection}>
          <Box
            component="img"
            sx={styles.media}
            src={
              post.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt={post.title}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default PostDetails;
