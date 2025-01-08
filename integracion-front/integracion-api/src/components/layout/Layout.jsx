/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Se asegura de ocupar el 100% de la altura del viewport
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', // Asegura que el Footer esté abajo
        background: 'linear-gradient(135deg, #FEB4AD, #85FDFF)', // Fondo degradado
        padding: 0, // Evitar márgenes adicionales
        margin: 0, // Evitar márgenes adicionales
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1, // Se expande para ocupar el espacio disponible entre Header y Footer
          width: '100%',
          maxWidth: '1200px', // Ancho máximo para el contenido
          textAlign: 'center',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
