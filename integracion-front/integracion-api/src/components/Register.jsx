import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';
import useRegisterUser from '../hooks/user/useRegisterUser';
import useFetchRoles from '../hooks/user/useFetchRoles';
import { roleTranslations } from '../utils/translations';
import Layout from './layout/Layout';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate();
  const { registerUser, error } = useRegisterUser();
  const { error: errorRoles, done, roles, fetchRoles } = useFetchRoles();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await registerUser(form);
    if (response) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (!done) {
      fetchRoles();
    }
  }, [fetchRoles, done]);

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
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleRegister}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '400px',
            background: '#fff',
            padding: 3,
            marginBottom: 4,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            required
            fullWidth
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <TextField
            label="Last Name"
            variant="outlined"
            required
            fullWidth
            value={form.lastName}
            onChange={(e) =>
              setForm({ ...form, lastName: e.target.value })
            }
          />
          <TextField
            label="Age"
            variant="outlined"
            type="number"
            required
            fullWidth
            value={form.age}
            onChange={(e) =>
              setForm({ ...form, age: e.target.value })
            }
          />
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
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            InputProps={{
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
            }}
          />
          <TextField
            select
            label="Role"
            variant="outlined"
            required
            fullWidth
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <MenuItem value="" disabled>
              Select Role
            </MenuItem>
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {roleTranslations[role] || role}
              </MenuItem>
            ))}
          </TextField>
          {errorRoles && (
            <Typography variant="body2" color="error" textAlign="center">
              {errorRoles}
            </Typography>
          )}
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
            Register
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

export default Register;
