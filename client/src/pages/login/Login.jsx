import "./login.css"
import {Link} from "react-router-dom"
import { useContext,useRef } from "react"
import { Context } from "../../context/Context"
import axios from "axios"

function Login() {
  const userRef = useRef()
  const passwordRef = useRef()
const {user, dispatch, isFetching } = useContext(Context)

  const handleSubmit = async(e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username:userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  }
  console.log(user)
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input ref={userRef} className="loginInput" type="text" placeholder="ENTER YOUR USERNAME.." />
        <label>Password</label>
        <input ref={passwordRef} className="loginInput" type="password" placeholder="Enter password" />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">Register</Link>
          </button>
    </div>
  )
}

export default Login