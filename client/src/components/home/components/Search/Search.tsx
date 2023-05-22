import { AppBar, TextField, Button } from '@mui/material';
import { useState } from 'react';
import * as styles from './styles';
import { getPostsBySearch } from '../../../../actions/posts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags}`);
    } else {
      navigate('/');
    }
  };

  return (
    <AppBar sx={styles.appBarSearch} position="static" color="inherit">
      <TextField
        name="search"
        variant="outlined"
        label="Search Memories"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TextField
        name="search"
        variant="outlined"
        label="Search Tags"
        fullWidth
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <Button onClick={searchPost} variant="contained" color="primary">
        Search
      </Button>
    </AppBar>
  );
};

export default Search;
