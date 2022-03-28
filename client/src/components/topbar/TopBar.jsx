import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./topBar.css"

function TopBar() {
  const {user, dispatch} = useContext(Context)
  const PF = "http://localhost:5000/images/"
  const handleLogout = () => {
      dispatch({type:"LOGOUT"})
  }

  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-youtube-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link to="/" className="link">Home</Link>
                  </li>
                <li className="topListItem">
                <Link to="/about" className="link">About</Link>
                </li>
                <li className="topListItem">
                <Link to="/" className="link">Contact</Link>
                </li>
                <li className="topListItem">
                <Link to="/write" className="link">Write</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link to="/settings">
              {!user.profilePic ? (<img className="topImage" src="https://cdn.dribbble.com/users/230875/screenshots/12589592/media/a12435c0fd22de967b379b098f606683.jpg?compress=1&resize=400x300" />) :
                (<img className="topImage" src={PF+user.profilePic} alt="" />)
  
              }
            </Link>

          ):(
            <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
            </ul>
          )}
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar