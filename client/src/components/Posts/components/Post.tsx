import moment from 'moment';
import * as styles from './styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  ButtonBase,
} from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post, setPostId }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e: any) => {
    e.preventDefault();

    dispatch(deletePost(post._id));
  };

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <Card sx={styles.card}>
      {/* <ButtonBase onClick={openPost} sx={styles.cardActions}> */}
      <CardMedia
        sx={styles.media}
        image={post.selectedFile}
        title={post.title}
      />
      <Box component="div" sx={styles.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.creationDate).fromNow()}
        </Typography>
      </Box>
      <Box component="div" sx={styles.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => {
            setPostId(post._id);
          }}
        >
          <MoreHorizRoundedIcon />
        </Button>
      </Box>
      <Box component="div" sx={styles.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((el: string) => `#${el} `)}
        </Typography>
      </Box>
      <Typography sx={styles.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      {/* </ButtonBase> */}
      <CardActions sx={styles.cardActions}>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteOutlineRoundedIcon fontSize="small" /> Delete{' '}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
