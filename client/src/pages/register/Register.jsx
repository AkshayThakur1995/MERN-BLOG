import "./register.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      username,email,password
    })
    console.log(res)
  }
  return (
    <div className="register">
          <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)}/>
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
        <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <Link to="/login" classNamelink>LOGIN</Link>
        </button>
    </div>
  )
}

export default Register