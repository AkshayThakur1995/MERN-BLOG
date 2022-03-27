import "./write.css"

function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
        alt=""
         />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-folder-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" autoFocus={true} className="writeInput" />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Write Here.." type="text" className="writeInput writeText"></textarea>
                <button className="writeSubmit">Publish</button>
            </div>
        </form>
    </div>
  )
}

export default Write