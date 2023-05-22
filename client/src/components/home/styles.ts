import { SxProps, Theme } from "@mui/material";

export const pagination: SxProps<Theme> = {
  borderRadius: 4,
  marginTop: '1rem',
  padding: '16px',
};

export const gridContainer: SxProps<Theme> = {
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column-reverse',
    // },
};

export const paper: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  borderRadius: 4,
  marginBottom: '1rem',
  padding: '16px',
  backgroundColor: '#ffa319',
  color: 'white',
  textAlign: 'center'
};
