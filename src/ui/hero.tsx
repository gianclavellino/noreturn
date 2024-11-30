import React from 'react';
import { Box, Typography, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import { Jersey_20 } from 'next/font/google';

const jersey = Jersey_20({ subsets: ['latin'], weight: '400' });

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[700],
  '&:hover': {
    backgroundColor: yellow[700],
  },
  fontSize: '1rem', // Default font size
  padding: theme.spacing(1.5, 3), // Default padding
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem', // Slightly smaller for mobile
    padding: theme.spacing(1, 2),
  },
}));

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("https://i.ibb.co/Qd4VMDh/a.jpg")', // Replace with your own image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '70vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4, 2), // Padding for mobile
  [theme.breakpoints.down('sm')]: {
    height: '50vh', // Reduced height for mobile
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroContainer>
      <Container maxWidth="md" >
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          component="h2"
          color="white"
          className={jersey.className} mt={7}
        >
          <b>NO RETURN FOR US</b>
        </Typography>
        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          component="p"
          color="white"
          gutterBottom
          sx={{ marginTop: theme.spacing(0) }}
        >
         Commitment, boldness, and courage to embrace the unknown
        </Typography>
        <ColorButton 
          sx={{ marginTop: theme.spacing(2) }}
          variant="contained"
          color="primary"
          size={isMobile ? 'medium' : 'large'}
          href="#explore"
        >
          <b>WEB3 SOCIAL CLUB</b>
        </ColorButton>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
