import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchUser from '../../hooks/user/useFetchUser';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

function Users() {
  const [users, setUsers] = useState([]);
  const { fetchUser, done } = useFetchUser();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const fetchUsersCallback = useCallback(async () => {
    if (!done) {
      const data = await fetchUser();
      setUsers(data);
    }
  }, [fetchUser, done]);

  useEffect(() => {
    fetchUsersCallback();
  }, [fetchUsersCallback]);

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleGoBack} style={{ marginBottom: '16px' }}>
        Volver Atrás
      </Button>
      <h2>Mis usuarios</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: 'solid black' }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Apellido</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Edad</TableCell>
              <TableCell align="center">Fecha de Registro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.age}</TableCell>
                <TableCell align="center">{new Date(user.registrationDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Users;
