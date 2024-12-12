import React, { useCallback, useEffect, useState } from 'react'
import useFetchUser from '../../hooks/user/useFetchUser'

function Users() {
    const [users, setUsers] = useState([])
    const { fetchUser, done } = useFetchUser()

    const getUsers = async () => {
        const data = await fetchUser()
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        getUsers()
    }, [fetchUser])

  return (

    <div>
      { users ? (
        users.map(user => (
            <p key={user._id}>{user.name}</p>
        ))
      ) : <></> }
    </div>
  )
}

export default Users
