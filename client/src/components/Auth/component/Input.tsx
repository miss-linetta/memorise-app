import { Grid, TextField } from '@mui/material';

interface InputProps {
  handleChange: any;
  autoFocus?: boolean;
  name: string;
  half?: boolean;
  label: string;
  type: string;
}

const Input = ({
  name,
  handleChange,
  label,
  autoFocus,
  half,
  type,
}: InputProps) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
      />
    </Grid>
  );
};

export default Input;
