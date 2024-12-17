import Login from './Login'
import Users from './admin/Users'
import Products from './products/Products'

function Home() {

   return (
    <>
    <h1>¡Bienvenid@ a nuestro sitio!</h1>
    <Login />
    <Users />
    <Products />
    </>
  )
}

export default Home