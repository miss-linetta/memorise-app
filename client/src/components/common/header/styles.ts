import { SxProps, Theme } from "@mui/material";

export const appBar: SxProps<Theme> = {
  height: '100px',
  borderRadius: 5,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  a: {
    textDecoration: 'none'
  },
  '@media(maxWidth: 425px)': {
    flexDirection: 'column',
  },
};

export const button: SxProps<Theme> = {
  backgroundColor: '#ffa319'
};

export const heading: SxProps<Theme> = {
  textDecoration: 'none',
  fontSize: '2em',
  fontWeight: 300,
};

export const image: SxProps<Theme> = {
  height: '60px',
  marginLeft: '10px',
  marginTop: '5px',
};

export const toolbar: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '400px', 
};

export const profile: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media(maxWidth: 425px)': {
    flexDirection: 'column',
  } 
};

export const logout: SxProps<Theme> = {
  marginLeft: '20px',
  backgroundColor: '#ffa319'
};

export const userName: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  paddingLeft: '10px',
};

export const brandContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const purple: SxProps<Theme> = {
  // Add any specific styles for the 'purple' class if needed
};
