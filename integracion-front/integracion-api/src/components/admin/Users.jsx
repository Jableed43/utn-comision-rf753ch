import { useCallback, useEffect, useState } from 'react'
import useFetchUser from '../../hooks/user/useFetchUser'
import { useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function Users() {
  const [users, setUsers] = useState([])
  const { fetchUser, done } = useFetchUser()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const fetchUsersCallback = useCallback(async () => {
    if (!done) {
      const data = await fetchUser()
      setUsers(data)
    }
  }, [fetchUser, done])

  useEffect(() => {
    fetchUsersCallback()
  }, [fetchUsersCallback])

  console.log(done)

  return (

    <Box>
      <Button onClick={handleGoBack} >Volver Atras</Button>

      <h2>Mis usuarios</h2>

      {/* EmptyState */}
      {!users ? (
        <p> No hay usuarios </p>
      ) :

      <TableContainer >
        <Table sx={{ minWidth: '650px', border: "solid black" }} >

          <TableHead>

            <TableRow>

              <TableCell align='center' > Nombre </TableCell>
              <TableCell align='center' > Apellido </TableCell>
              <TableCell align='center' > Email </TableCell>
              <TableCell align='center' > Edad </TableCell>
              <TableCell align='center' > Fecha Registro </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

{/* Mapeo usuarios */}
          
       { users.map(user => (
          
          <TableRow key={user._id} >

        <TableCell align='center' > {user.name} </TableCell>
        <TableCell align='center' > {user.lastName} </TableCell>
        <TableCell align='center' >{user.email}</TableCell>
        <TableCell align='center' >{user.age}</TableCell>
        <TableCell align='center' >{ new Date(user.registrationDate).toLocaleDateString() }</TableCell>

          </TableRow>
          
        ))}
     

          </TableBody>

        </Table>
      </TableContainer>
      }
    </Box>
  )
}

export default Users
