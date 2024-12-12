import { useState } from 'react'
import useRegisterUser from '../hooks/user/useRegisterUser';
import { useNavigate } from 'react-router-dom'

//Recordar: pasar age a date

function Register() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    age: 0,
    email: "",
    password: ""
  })

  //Permite la navegacion/redireccion hacia partes de tu sitio
  const navigate = useNavigate()

  const { registerUser, error } = useRegisterUser()

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await registerUser(form)
    if(response){
      navigate("/")
    }
  }

   return (
    <>
    <section className='formContainer'>
    <h2>Register</h2>
    <br />
    <form onSubmit={handleRegister} >

      <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required 
      value={form.name} onChange={e => setForm({ ...form, name: e.target.value}) }/>
      </div>

      <div>
      <label htmlFor="lastName">LastName</label>
      <input type="text" name="lastName" required 
      value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value}) }/>
      </div>

      <div>
      <label htmlFor="age">Age</label>
      <input type="number" name="age" required 
      value={form.age} onChange={e => setForm({ ...form, age: e.target.value}) }/>
      </div>

      <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required 
      value={form.email} onChange={e => setForm({ ...form, email: e.target.value}) }/>
      </div>

      <div>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" required value={form.password}
      onChange={e => setForm({...form, password: e.target.value}) }/>
      </div>

      { error ?? <p style={{ color: 'red' }} > {error}</p> }

      <br />

      <button type="submit">Register</button>

    </form>
    </section>
    </>
  )
}

export default Register