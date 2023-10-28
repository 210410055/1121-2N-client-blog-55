import { useState,useEffect } from "react";

// let api_url = `http://localhost:5000/api/card_55`

import { supabase } from '../db/clientSupabase'

const BlogSupabase_55 = () =>{
    const [name , setName] = useState ('蔡武勳');
    const [id,setId] = useState(210410055);
    const[blogs, setBlogs] = useState([]);

    const fetchBlogsFromSupabase = async () => {
        try{
           //node寫法 註解
            // const response = await fetch(api_url);
            // const data = await response.json();
            //supabase 寫法 
            let { data, error} = await supabase.from('card_55').select('*');

            console.log('blogs data',data);
            setBlogs(data);
            //利用setBlogs將陣列储存起來
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
      fetchBlogsFromSupabase();
  },[]);

    return (
      <section className="blogs">
      <div className="section-title">
        <h2>Blog From Supabase</h2>
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
export default BlogSupabase_55;