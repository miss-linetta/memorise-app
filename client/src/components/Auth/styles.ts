import { SxProps, Theme } from "@mui/material";

export const paper: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
};

export const form: SxProps<Theme> = {
  marginTop: '20px',
  width: '100%',
   
};

export const submit: SxProps<Theme> = {
  marginTop: '20px',
};

export const google: SxProps<Theme> = {
  marginTop: '20px',
  width: '100%'
};

export const lastButton: SxProps<Theme> = {
  marginTop: '20px',
  width: '100%',
  position: 'relative',
  transform: 'translateX(45%)'
};
