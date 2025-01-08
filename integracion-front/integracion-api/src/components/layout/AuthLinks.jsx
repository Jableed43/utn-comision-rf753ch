import { Link, useLocation } from 'react-router-dom';
import { MenuItem, Typography, Box } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../auth/AuthProvider';

function AuthLinks() {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation(); // Hook para obtener la ubicación actual

  const handleLogout = () => {
    logout();
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, marginLeft: 'auto', alignItems: 'center' }}>
      {/* Show Login and Register only if not authenticated and not on those pages */}
      {!isAuthenticated && location.pathname !== '/' && (
        <MenuItem
          component={Link}
          to="/"
          sx={{
            color: 'black',
            '&:hover': { backgroundColor: '#F5F5F5' },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LoginIcon />
          <Typography>Login</Typography>
        </MenuItem>
      )}

      {!isAuthenticated && location.pathname !== '/register' && (
        <MenuItem
          component={Link}
          to="/register"
          sx={{
            color: 'black',
            '&:hover': { backgroundColor: '#F5F5F5' },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <PersonAddIcon />
          <Typography>Register</Typography>
        </MenuItem>
      )}

      {/* Show Logout if authenticated */}
      {isAuthenticated && (
        <MenuItem
          onClick={handleLogout}
          sx={{
            color: 'black',
            '&:hover': { backgroundColor: '#F5F5F5' },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            marginLeft: 'auto', // Push to the right
          }}
        >
          <LogoutIcon />
          <Typography>Logout</Typography>
        </MenuItem>
      )}
    </Box>
  );
}

export default AuthLinks;
