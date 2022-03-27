import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1543304216-b46be324b571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2181&q=80"
        />
    </div>
  )
}

export default Header