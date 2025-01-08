import { Typography } from '@mui/material';
import Layout from './layout/Layout';
import carrito from '../assets/cartera-de-productos-ejemplos.webp';

function Home() {
  return (
    <Layout>
      <Typography 
        variant="h4" 
        sx={{ 
          color: 'black', 
          fontWeight: 'bold', 
          mt: 1 
        }}
      >
        ¡Bienvenid@ a nuestro sitio!
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          color: 'black', 
          mb: 4, 
          maxWidth: 600, 
          margin: '0 auto' 
        }}
      >
        Descubre nuestra amplia gama de productos, navega por las categorías y encuentra justo lo que necesitas. ¡Nos encanta tenerte aquí!
      </Typography>
      <img 
        src={carrito} 
        alt="carrito" 
        style={{ 
          width: '50%', 
          maxWidth: '500px', 
          marginBottom: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' 
        }} 
      />
    </Layout>
  );
}

export default Home;
