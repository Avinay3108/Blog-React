import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=1380&t=st=1699334832~exp=1699335432~hmac=54a054f4defb72caf1fbcb2da3ee57958b068877bc7767c85fa952351d81d644" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem, ipsum dolor sit
                </span>
                <hr />
                <span className="postDate"> 1hour ago</span>
            </div>

            <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti deserunt, incidunt,
                fugiat dolorum inventore corporis nobis quam ad provident et accusamus odit magnam, consectetur quos minima similique
                obcaecati! Nisi, facilis
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti deserunt, incidunt,
                fugiat dolorum inventore corporis nobis quam ad provident et accusamus odit magnam, consectetur quos minima similique
                obcaecati! Nisi, facilis?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti deserunt, incidunt,
                fugiat dolorum inventore corporis nobis quam ad provident et accusamus odit magnam, consectetur quos minima similique
                obcaecati! Nisi, facilis</p>
        </div>
    )
}
