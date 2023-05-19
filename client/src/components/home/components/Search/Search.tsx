import { AppBar, TextField, Button } from '@mui/material';
import ChipInput from 'material-ui-chip-input';
import { useState } from 'react';
import * as styles from './styles';
import { getPostsBySearch } from '../../../../actions/posts';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();

  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const handleAdd = (tag: any) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete: any) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(
        `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
      );
    } else {
      navigate('./');
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
      <ChipInput
        style={{ margin: '10px 0' }}
        value={tags}
        label="Search Tags"
        variant="outlined"
        onAdd={handleAdd}
        onDelete={handleDelete}
      />
      <Button
        onClick={searchPost}
        // className={styles.searchButton}
        variant="contained"
        color="primary"
      >
        Search
      </Button>
    </AppBar>
  );
};

export default Search;
