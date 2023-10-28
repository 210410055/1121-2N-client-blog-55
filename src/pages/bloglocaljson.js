import { useState } from "react";
import blogdata from "../data/BlogData"

const Bloglocaljson_55 = () =>{
    const [name , setName] = useState ('蔡武勳');
    const [id,setId] = useState(210410055);
    const[blogs, setBlogs] = useState(blogdata);

    return (
        <section className="blogs">
        <div className="section-title">
          <h2>Blog From Local</h2>
          <h3>{id} , {name}</h3>
        </div>
        <div className="blogs-center">     
        {blogs.map((item)=>{
            const {id, img ,remote_url , title ,category ,descrip} = item;
            return (
                <article key={id} className="blog">
        <img
          src={img}
          alt="Coffee photo"
          className="img blog-img"
        />
        <div className="blog-content">
          <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
          <h3>{title}</h3>
          <p>{descrip}</p>
          <a href="#">read more</a>
        </div>
      </article>
            )
        })}
      </div>
      </section>
      )
  }
  export default Bloglocaljson_55;