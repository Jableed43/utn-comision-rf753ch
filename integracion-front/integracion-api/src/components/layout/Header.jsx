import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
import AuthLinks from './AuthLinks';

function Header() {
    const { userRole, isAuthenticated } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    // Define las páginas condicionalmente según el rol del usuario
    const pages = [
        { name: 'Products', path: '/products', show: isAuthenticated }, // Siempre visible
        { name: 'Users', path: '/users', show: userRole === 'ADMIN' }, // Solo para ADMIN
        { name: 'Categories', path: '/categories', show: userRole && userRole !== 'CLIENT' }, // No para CLIENT
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: " #FEAFA8" }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Menú desplegable para dispositivos pequeños */}
                    {isAuthenticated && (<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.filter(page => page.show).map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography
                                        sx={{ textAlign: 'center', textTransform: "capitalize", color: "black" }}
                                        component={Link}
                                        to={page.path}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>)}

                    {/* Barra de navegación para dispositivos grandes */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.filter(page => page.show).map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block', textTransform: "capitalize" }}
                            >
                                {page.name}
                            </Button>
                        ))}
                        <AuthLinks />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
