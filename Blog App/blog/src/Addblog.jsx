import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom/dist';

const Addblog = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    description: '',
    file: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (data.title === '' || data.description === '' || data.file === null) {
      alert('Please fill in all fields');
    } else {
      try {
        const requestData = {...data};
        const response = await axios.post('http://localhost:3003/data', requestData );
        console.log(response, "data submit");
        Navigate('/')
        setData({
          title: '',
          description: '',
          file: null,
        });
      } catch (err) {
        console.log(err, 'error');
        
      }
    }
  };
  
  return (
    <>
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="addnewblog">
            <h2>Add a New Blog</h2>
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="Write Title" onChange={(e) => setData((prev) => ({ ...prev, title: e.target.value }))} />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              placeholder="Write Description" onChange={(e) => setData((prev) => ({ ...prev, description: e.target.value }))}
            />
          </div>
          <div className="file">
            <label htmlFor="file">Input File:
              {/* <input type="file" name="file" placeholder="File" onChange={(e) => setData((prev) => ({ ...prev, file: e.target.files[0] }))} /> */}
           
              <input type="file" name="file" onChange={(e) => {
              const reader = new FileReader()
              reader.readAsDataURL(e.target.files[0])
              reader.onloadend = () => {
                  setData((prev) => ({ ...prev, file: reader.result }))
              }
          }
          }/>
            </label>
          </div>
          <button className="newblog-btn" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Addblog;
