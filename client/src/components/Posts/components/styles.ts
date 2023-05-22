import { SxProps, Theme } from "@mui/material";

export const media: SxProps<Theme> = {
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
};
export const border: SxProps<Theme> = {
  border: 'solid',
};

export const fullHeightCard: SxProps<Theme> = {
  height: '100%',
};

export const card: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
};

export const overlay: SxProps<Theme> = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
};

export const overlay2: SxProps<Theme> = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
};

export const grid: SxProps<Theme> = {
  display: 'flex',
};

export const details: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
};

export const title: SxProps<Theme> = {
  padding: '0 16px',
};

export const content: SxProps<Theme> = {
  padding: '0 16px',
};

export const cardActions: SxProps<Theme> = {
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}