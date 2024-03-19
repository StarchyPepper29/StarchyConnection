import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/blogs/${id}`)
        .then((response) => {
            setTitle(response.data.title);
            setDescription(response.data.body);
            setAuthor(response.data.author);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);



  const handleSubmit = () => {
    const newPost = {
      title: title,
      author: author,
      body: description,
     
    };
    axios.put(`http://localhost:3000/blogs/${id}`, newPost)
    .then((response) => {
      console.log(response);
    }).then(() => {
      navigate('/blog');
    }
    )
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
    <h1>Edit a New Post</h1>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}
       >Edit Post</button>
    
  </div>
  );
};
  

export default Edit
