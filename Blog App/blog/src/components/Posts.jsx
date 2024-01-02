import React , {useEffect, useState} from "react";
import axios from "axios" ;
import Post from "./Post";

const Posts = () => {
  const [blogs , setBlogs] = useState([]);
  const [records , setRecords] = useState([]);

  
 useEffect(()=>{
 axios.get('http://localhost:3003/data')
 .then((res)=> {setBlogs(res.data)
    setRecords(res.data)
})
 .catch((err) => console.log(err))
    }, [])

  const getInputData =(e)=>{
    setBlogs(records.filter(r => r.title.toLowerCase().includes(e.target.value.toLowerCase())))

  }
  return (


    <>
      <div className="posts">
        <div className="search-container">
          <input type="text" placeholder="search" onChange={getInputData} className="search-input"></input>
        </div>

        <div className="blog-icon">
            <h3>Blogs</h3>
            <i className="fa fa-calculator"></i>
        </div>

        <div className="posts-container">
         {blogs.map((blog , index) =>(
         <Post blog={blog} key={index}/>
         ))}


        </div>
      </div>
    </>
  );
};

export default Posts;
