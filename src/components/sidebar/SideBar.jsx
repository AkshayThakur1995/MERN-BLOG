import "./sidebar.css"

function SideBar() {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
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