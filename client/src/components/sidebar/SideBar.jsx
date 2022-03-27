import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "./sidebar.css"

function SideBar() {
  const [cat, setCat] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories")
      setCat(res.data)
      
    }
    getCats()
  })
  return (
    <div className="sidebar">
    <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore rerum adipisci nesciunt? Eaque aperiam est enim iste molestias quos.</p>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-youtube-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
    </div>
    </div>
  )
}

export default SideBar