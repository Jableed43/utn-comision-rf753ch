import { Link } from 'react-router-dom'
import { useAuth } from './auth/AuthProvider'

function Home() {
  const { logout, userRole } = useAuth()

  const handleLogout = () => {
    logout()
  }

   return (
    <>
    <button onClick={handleLogout} > Logout </button>
    <h1>¡Bienvenid@ a nuestro sitio!</h1>

    { userRole && userRole === 'ADMIN' && (<Link to="/users"> Usuarios </Link>) }
    <br />
    <Link to="/products"> Productos </Link>
    <br />
    { userRole && userRole !== 'CLIENT' && (<Link to="/categories"> Categorias </Link>) }
    </>
  )
}

export default Home