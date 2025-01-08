import { useCallback, useEffect, useState } from "react";
import useFetchUser from "../../hooks/user/useFetchUser";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
} from "@mui/material";
import Layout from "../layout/Layout";
import GoBackButton from "../layout/GoBackButton";

function Users() {
  const [users, setUsers] = useState([]);
  const { fetchUser, done } = useFetchUser();

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
    <Layout>
      <Box sx={{ p: 3 }}>
        <GoBackButton sx={{ position: "absolute", left: 0 }} />

        <Typography variant="h4" sx={{ mb: 3 }}>
          Mis Usuarios
        </Typography>

        {/* Empty State */}
        {users.length === 0 ? (
          <Typography>No hay usuarios disponibles.</Typography>
        ) : (
          <TableContainer>
            <Table sx={{ minWidth: "650px", border: "solid black" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nombre</TableCell>
                  <TableCell align="center">Apellido</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Edad</TableCell>
                  <TableCell align="center">Fecha Registro</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.lastName}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.age}</TableCell>
                    <TableCell align="center">
                      {new Date(user.registrationDate).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Layout>
  );
}

export default Users;
