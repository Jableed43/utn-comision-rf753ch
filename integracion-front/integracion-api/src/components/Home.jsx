import { Link } from 'react-router-dom'
import { useAuth } from './auth/AuthProvider'

function Home() {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

   return (
    <>
    <button onClick={handleLogout} > Logout </button>
    <h1>¡Bienvenid@ a nuestro sitio!</h1>
    <Link to="/users"> Usuarios </Link>
    <br />
    <Link to="/products"> Productos </Link>
    </>
  )
}

export default Home