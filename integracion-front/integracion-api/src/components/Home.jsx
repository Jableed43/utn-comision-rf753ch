import Login from './Login';
import Users from './admin/Users';
import { useAuth } from './auth/AuthProvider';
import Products from './products/Products';

function Home() {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();  // Llamar a la función de logout del contexto
  };

  return (
    <div>
      <h1>¡Bienvenid@ a nuestro sitio!</h1>
      
      {/* Mostrar el login si no está autenticado */}
      {!isAuthenticated ? (
        <Login />
      ) : (
        <div>
          <p>Estás autenticado.</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}

      {/* Solo mostrar Usuarios y Productos si el usuario está autenticado */}
      {isAuthenticated && (
        <>
          <Users />
          <Products />
        </>
      )}
    </div>
  );
}

export default Home;
