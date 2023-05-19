import { SxProps, Theme } from "@mui/material";

export const media: SxProps<Theme> = {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
};

export const card: SxProps<Theme> = {
    display: 'flex',
    width: '100%',
};

export const section: SxProps<Theme> = {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
};

export const imageSection: SxProps<Theme> = {
    marginLeft: '20px',
};

export const recommendedPosts: SxProps<Theme> = {
    display: 'flex',
};

export const loadingPaper: SxProps<Theme> = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px', 
    borderRadius: '15px', 
    height: '39vh',
};
