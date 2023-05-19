import { SxProps, Theme } from "@mui/material";

export const paper: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  borderRadius: 4,
  marginBottom: '1rem',
  padding: '16px',
  h6: {
    textAlign: 'center',
    marginBottom: '15px',
  },
  div: {
    marginBottom: '4.5px',
    // marginTop: '10px',
  }
};

export const fileInput: SxProps<Theme> = {
  width: '97%',
  margin: '10px 0',
};

export const submit: SxProps<Theme> = {
  marginBottom: '10px',
  marginTop: '10px',
  backgroundColor: '#ffa319'
};

export const clear: SxProps<Theme> = {
  backgroundColor: '#ff1930'
}