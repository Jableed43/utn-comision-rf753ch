import  { useCallback, useEffect, useState } from 'react'
import useFetchUser from '../../hooks/user/useFetchUser'
import { useNavigate } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])
    const { fetchUser, done } = useFetchUser()
    const navigate = useNavigate()

    const handleGoBack = () => {
      navigate(-1)
    }

   const fetchUsersCallback = useCallback(async () => {
    if(!done){
      const data = await fetchUser()
      setUsers(data)
    }
  }, [fetchUser, done])

    useEffect(() => {
      fetchUsersCallback()
    }, [fetchUsersCallback])

    console.log(done)

  return (

    <div>
      <button onClick={handleGoBack} >Volver Atras</button>
      <h2>Mis usuarios</h2>
      { users ? (
        users.map(user => (
            <p key={user._id}>{user.name}</p>
        ))
      ) : <></> }
    </div>
  )
}

export default Users
