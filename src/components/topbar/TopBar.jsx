import { Link } from "react-router-dom"
import "./topBar.css"
function TopBar() {
  const user = false
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
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img className="topImage" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="" />

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