import React from "react";
import { Link } from "react-router-dom";

const Post = ({ blog, key }) => {
  console.log(blog)
  return (
    
    <>
      <Link to= {`/detail/${blog.id}`} className="post-link">
      <div className="blog ">
        <img src={blog.file} className="blog-image" />
        <div className="blog-title">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Post;
