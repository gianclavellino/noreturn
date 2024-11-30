import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '../logo.png'; // Your logo image
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

// Define navItems as objects with labels and routes
const navItems = [
  { label: 'HOME', route: '/' },
  { label: 'PLATFORM', route: '/platform' },
  { label: 'WHITEPAPER', route: '/whitepaper' },
  { label: 'ROADMAP', route: '/roadmap' },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'black' }}>
      <Typography variant="h6" sx={{ my: 2,textAlign: 'center' }}>
        <Image src={logo} alt="Logo" width={140} height={45} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding >
            <ListItemButton>
              <Link href={item.route} passHref>
                <ListItemText primary={item.label} sx={{fontWeight: 800, color: 'white' }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor: 'black' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{marginX: { xs: 0, sm: '5%' } , bgcolor: 'black' }}>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ ml:1,mt: 1.5, flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <Image src={logo} alt="Logo" width={140} height={45} className="rounded-md shadow-lg" />
          </Typography>

          {/* Desktop Navigation Links */}
          <Box m={3} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.route} passHref>
                <Button sx={{ fontWeight: 600,color: '#fff', ml: 2 }}>
                  {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                </Button>
              </Link>
            ))}
            <Box ml={3}>
              <ConnectButton />
            </Box>
          </Box>

          {/* Mobile ConnectButton - Align Right */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'flex-end', // Aligns the button to the right
              flexGrow: 1,
            }}
          >
            <ConnectButton
              accountStatus="avatar"
              showBalance={{
                smallScreen: false,
                largeScreen: false,
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <nav>
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            textAlign: 'center',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'black',
             
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
