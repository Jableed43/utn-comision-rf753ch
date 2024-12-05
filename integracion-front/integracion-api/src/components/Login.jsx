import { useState } from 'react'
import useLoginUser from '../hooks/user/useLoginUser';

function Login() {

  const { loginUser } = useLoginUser()

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await loginUser(form)
    console.log(success)
  }

   return (
    <>
    <section className='formContainer'>
    <h2>Login</h2>
    <br />
    <form onSubmit={handleLogin} >
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

      <button type="submit">Login</button>

    </form>
    </section>
    </>
  )
}

export default Login