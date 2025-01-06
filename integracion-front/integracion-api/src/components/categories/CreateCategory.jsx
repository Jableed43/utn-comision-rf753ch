import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCreateCategory from "../../hooks/category/useCreateCategory";

function CreateCategory() {
    const navigate = useNavigate()
    const { createCategory, error } = useCreateCategory()

  const [form, setForm] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createCategory(form)
    setTimeout( () => {
      navigate(-1)
    }, 2000 )
  }

    return (
    <section>
      <h2>Crear categoria</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre de categoria</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
            { error && <p> Error:  {error} </p> }
            <button type="submit"> Crear </button>

      </form>
    </section>
  );
}

export default CreateCategory;
