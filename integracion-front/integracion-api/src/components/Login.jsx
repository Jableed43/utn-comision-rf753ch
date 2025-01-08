import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthProvider';
import Layout from './layout/Layout';
import { Box, TextField, Button, Typography } from '@mui/material';

function Login() {
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(form);
    if (success) {
      navigate('/home');
    }
  };

  const handleNoUser = () => {
    navigate('/register');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}
        >
          Login
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, color: 'black' }}
        >
          ¿No posees usuario?{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={handleNoUser}
          >
            ¡Crealo!
          </span>
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '400px',
            background: '#fff',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            required
            fullWidth
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            slotProps={{
              input: {
                endAdornment: (
                  <Button
                    onClick={togglePasswordVisibility}
                    sx={{
                      fontSize: '1.2rem',
                      color: 'black',
                      background: 'none',
                      boxShadow: 'none',
                      minWidth: 0,
                    }}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </Button>
                ),
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{
              background: '#FEAFA8',
              ':hover': { background: '#FEB4AD' },
            }}
          >
            Login
          </Button>
          {error && (
            <Typography variant="body2" color="error" textAlign="center">
              Error: {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Layout>
  );
}

export default Login;
