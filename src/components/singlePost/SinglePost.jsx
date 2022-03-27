import "./singlePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Tree of life
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Akshay</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores molestias perspiciatis harum iusto illo quae ad amet qui debitis impedit id mollitia in voluptate at, maxime quos, sequi quasi eaque ut incidunt voluptates aut officiis rem. Iusto at similique laborum sed, et debitis tenetur qui recusandae! Quaerat, cum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi maxime, dolore fugit placeat odit optio veniam repudiandae laborum iure beatae? Sunt laboriosam voluptatibus reprehenderit et? Voluptates, molestiae. Quas quo iusto voluptatibus enim maiores quasi minima id error rem tempora, quis eius magnam officia accusamus recusandae in velit vitae est inventore? Nobis, fugit hic. Quis earum reiciendis exercitationem, velit at eos cupiditate? Velit ipsum id quos magnam voluptatibus voluptas asperiores aut, optio illum atque est soluta, eius fuga deleniti temporibus, nostrum neque ex facere tempora natus provident distinctio labore! Vitae perspiciatis ipsum natus sunt? In cumque tenetur aliquam impedit perferendis.
            </p>
        </div>
    </div>
  )
}

export default SinglePost