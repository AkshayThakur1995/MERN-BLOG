import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"
import "./home.css"

function Home() {
  return (
    <div>
        <Header />
        <div className="home">
            <Posts />
            <SideBar />
        </div>
    </div>
  )
}

export default Home