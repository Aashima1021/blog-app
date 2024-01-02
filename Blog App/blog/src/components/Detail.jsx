import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
//   const [imagearray, setImagearray] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/data/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res.data)
        // setImagearray(res.data.file);
        // console.log(res.data.file)
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className="detail-post-container">
      <div className="images-container">
            <img src={post.file} alt="image"></img>
        </div>
        <div className="title-description">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          
        </div>

        
      </div>
    </>
  );
};

export default Detail;
