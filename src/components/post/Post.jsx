import "./post.css"

function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
         src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80" 
         alt="" 
         />
         <div className="postInfo">
             <div className="postCats">
                 <span className="postCat">Music</span>
                 <span className="postCat">Life</span>
             </div>
             <span className="postTitle">
                My First Post
             </span>
             <hr />
             <span className="postDate">1 hour ago</span>
         </div>
         <p className="postDesc">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nostrum amet tenetur vel officia laboriosam autem dolores ad itaque maiores dolore illo vitae sapiente eaque molestias sequi quasi ullam earum incidunt voluptas hic quaerat. Dignissimos, accusantium? Facilis laboriosam tenetur aliquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nostrum amet tenetur vel officia laboriosam autem dolores ad itaque maiores dolore illo vitae sapiente eaque molestias sequi quasi ullam earum incidunt voluptas hic quaerat. Dignissimos, accusantium? Facilis laboriosam tenetur aliquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, nostrum amet tenetur vel officia laboriosam autem dolores ad itaque maiores dolore illo vitae sapiente eaque molestias sequi quasi ullam earum incidunt voluptas hic quaerat. Dignissimos, accusantium? Facilis laboriosam tenetur aliquam.
         </p>
    </div>
  )
}

export default Post