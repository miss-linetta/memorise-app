import { SxProps, Theme } from "@mui/material";

export const appBar: SxProps<Theme> = {
  height: '100px',
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  a: {
    textDecoration: 'none'
  },
  header: {
    '@media(maxWidth: 425px)' : {
      flexDirection: 'column',
    }
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
  width: '400px',
  alignItems: 'center', 
};

export const logout: SxProps<Theme> = {
  marginLeft: '20px',
  backgroundColor: '#ffa319'
};

export const userName: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
};

export const brandContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const purple: SxProps<Theme> = {
    
};
