import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme, useMediaQuery } from '@mui/material';
import { Jersey_20 } from 'next/font/google';

const jersey = Jersey_20({ subsets: ['latin'], weight: '400' });

interface CardProps {
  title: string;
  description: string;
  image: string;
  altText: string;
}

const NftCard: React.FC<CardProps> = ({ title, description, image, altText }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ maxWidth: isMobile ? 200 : 400, textAlign: 'center', margin: 'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={isMobile ? '100' : '340'}
          image={image}
          alt={altText}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant={isMobile ? 'h6' : 'h4'}
            component="div"
            className={jersey.className}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', fontSize: isMobile ? '0.9rem' : '1rem' }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NftCard;
