import React from 'react';
import moment from 'moment';
import useStyles from './styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setPostId }: any) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (e: any) => {
    e.preventDefault();

    dispatch(deletePost(post._id));
  };

  const handleLike = (e: any) => {
    e.preventDefault();

    dispatch(likePost(post._id));
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.creationDate).fromNow()}
        </Typography>
      </div>
      <div className={styles.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => {
            setPostId(post._id);
          }}
        >
          <MoreHorizRoundedIcon />
        </Button>
      </div>
      <div className={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((el: string) => `#${el} `)}
        </Typography>
      </div>
      <Typography className={styles.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button size="small" color="primary" onClick={handleLike}>
          <FavoriteBorderRoundedIcon fontSize="small" /> Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteOutlineRoundedIcon fontSize="small" /> Delete{' '}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
