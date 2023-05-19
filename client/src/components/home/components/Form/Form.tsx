import React, { useEffect, useState } from 'react';
import * as styles from './styles';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../../../actions/posts';

const Form = ({ postId, setPostId }: any) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state: any) =>
    postId ? state.posts.find((el: any) => el._id === postId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (postId) {
      console.log(dispatch(updatePost(postId, postData)));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };

  const clear = () => {
    setPostId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper sx={styles.paper}>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">
          {postId ? 'Editing' : 'Creating'} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <Box component="div" sx={styles.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          sx={styles.submit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          sx={styles.clear}
          size="small"
          type="button"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
