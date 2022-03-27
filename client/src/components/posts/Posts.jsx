import Post from "../post/Post"
import "./posts.css"

function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => {
        return <Post post={p}/>
      })}
        
    </div>
  )
}

export default Posts