import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import Users from './admin/Users'

function Home() {

   return (
    <>
    <h1>¡Bienvenid@ a nuestro sitio!</h1>
    <Login />
    <Users />
    </>
  )
}

export default Home