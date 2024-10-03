import Page from "../layout/page";

function Contact() {
  return (
    <Page>
      <form className="formLayout">
        <h4 className="formTitle">Escribinos para consultarnos</h4>

        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />

        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" />

        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input type="date" name="birthdate" />

        <label htmlFor="reason">Motivo del contacto</label>
        <select name="reason">
          <option value="getInfo">Obtener informacion</option>
          <option value="problem">Problemas con nuestros servicios</option>
          <option value="work">Trabaja con nosotros</option>
        </select>

        <label htmlFor="message">Mensaje</label>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Escriba su mensaje..."
        />

        <div className="formButtonContainer">
          <button type="submit">Enviar</button>
          <button type="reset">Borrar</button>
        </div>
      </form>
    </Page>
  );
}

export default Contact;
