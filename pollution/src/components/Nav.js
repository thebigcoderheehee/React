import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AdbIcon from '@mui/icons-material/Adb';

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(false); // Drawer open state

  const handleOpenNavMenu = () => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const links = [
    { to: '/Air', text: 'Air Pollution' },
    { to: '/Water', text: 'Water Pollution' },
    { to: '/Land', text: 'Land Pollution' },
  ];

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile menu (Hamburger icon) - Positioned left */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo and Home text - Positioned right on mobile view and left on desktop view */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-end', md: 'flex-start' },
                flexGrow: 1,
              }}
            >
              <AdbIcon sx={{ mr: 1 }} />
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Box>

            {/* Drawer for mobile navigation */}
            <Drawer
              anchor="left"
              open={anchorElNav}
              onClose={handleCloseNavMenu}
            >
              <List>
                {links.map((link) => (
                  <ListItem button key={link.to} onClick={handleCloseNavMenu}>
                    <Link
                      to={link.to}
                      style={{ color: 'black', textDecoration: 'none' }}
                    >
                      <ListItemText primary={link.text} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
              <ul style={{ display: 'flex', padding: 0, margin: 0, listStyle: 'none' }}>
                {links.map((link) => (
                  <li key={link.to} style={{ marginRight: '20px' }}>
                    <Link to={link.to} style={{ color: 'white', textDecoration: 'none' }}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Nav;
