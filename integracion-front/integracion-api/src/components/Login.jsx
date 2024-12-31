import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthProvider';

//nice to have: mostrar contraseña / ocultar en input de password

function Login() {
  
  const { login, error } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
   const success = await login(form)
   console.log(success)
   if(success){
    navigate("/home")
   }
  }

  const handleNoUser = () => {
    navigate("/register")
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

   return (
    <>
    <section className='formContainer'>
    <h2>Login</h2>
  <p> ¿No posees usuario? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleNoUser}>¡Crealo!</span></p>
    <br />
    <form onSubmit={handleLogin} >
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required 
      value={form.email} onChange={e => setForm({ ...form, email: e.target.value}) }/>
      </div>

      <div>
      <label htmlFor="password">Password</label>
      <input type={ showPassword ? "text" : "password" } name="password" required value={form.password}
      onChange={e => setForm({...form, password: e.target.value}) }/>
      <button type='button' style={{background: 'none', border: 'none', cursor: 'pointer' }} onClick={togglePasswordVisibility} >  {showPassword ? "🙈" : "👁️"} </button>
      </div>

      <button type="submit">Login</button>

    </form>

    { error && <p style={{color: "red"}} > Error: {error} </p> }

    </section>
    </>
  )
}

export default Login