import HeaderRoute from "./layout/HeaderRoute";

function Contact() {
  const links = [
    {
      url: "/",
      name: "Pagina principal",
    },
    {
      url: "/contacto",
      name: "Contacto",
    },
    {
      url: "/productos",
      name: "Productos",
    },
  ];
  return (
    <>
      <HeaderRoute navLinks={links} />
      <div>Contact</div>
    </>
  );
}

export default Contact;
